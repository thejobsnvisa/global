import nodemailer from "nodemailer";
import process from "node:process";

export default async function handler(req, res) {
  const origin = req.headers.origin;  

  /* ========= CORS ========= */
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    /* ========= SAFE BODY PARSE ========= */
    let body;
    try {
      body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    } catch {
      return res.status(400).json({ success: false, message: "Invalid JSON" });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return res.status(400).json({ success: false, message: "Invalid request body" });
    }

    const { name, email, phone, visaType, message } = body;
    const leadSource = body.source || "Website Form";

    if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safePhone = typeof phone === "string" || typeof phone === "number" ? String(phone) : "";
    const safeVisaType = typeof visaType === "string" ? visaType : "";
    const safeMessage = typeof message === "string" ? message : "";
    const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[char]);

    /* ========= PHONE PARSE ========= */
    const cleanPhone = safePhone.replace(/\D/g, "");
    let countryCode = "91";
    let phoneNumber = cleanPhone;

    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(0, cleanPhone.length - 10);
      phoneNumber = cleanPhone.slice(-10);
    }

    /* ========= CRM SYNC ========= */
    console.log("[CRM] Sending data for:", safeEmail);
    let crmDelivered = false;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      let crmResponse;
      try {
        crmResponse = await fetch("https://case.growmore.one/api/webhooks/website-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: safeName,
            Email: safeEmail,
            Phone: phoneNumber,
            Country_Code: countryCode,
            Inquiries: safeVisaType || "General Inquiry",
            Source: leadSource,
            Message: safeMessage,
          }),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeout);
      }

      const crmText = await crmResponse.text();
      console.log("[CRM STATUS]:", crmResponse.status);
      console.log("[CRM RESPONSE]:", crmText);
      crmDelivered = crmResponse.ok;
    } catch (err) {
      console.error("[CRM ERROR FULL]:", err);
    }

    /* ========= EMAIL (OPTIONAL IF CRM ACCEPTED THE LEAD) ========= */
    let emailDelivered = false;
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("[EMAIL ERROR] Missing EMAIL_USER or EMAIL_PASS environment variables");
    } else {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Growmore" <${process.env.EMAIL_USER}>`,
          to: ["info@growmore.one"],
          subject: "New Appointment Booking",
          html: `
            <h3>New Lead Details</h3>
            <p><b>Name:</b> ${escapeHtml(safeName)}</p>
            <p><b>Email:</b> ${escapeHtml(safeEmail)}</p>
            <p><b>Phone:</b> ${escapeHtml(safePhone || "N/A")}</p>
            <p><b>Visa Type:</b> ${escapeHtml(safeVisaType || "Not specified")}</p>
            <p><b>Message:</b> ${escapeHtml(safeMessage || "No message")}</p>
          `,
        });
        emailDelivered = true;
      } catch (err) {
        console.error("[EMAIL ERROR FULL]:", err);
      }
    }

    if (!crmDelivered && !emailDelivered) {
      return res.status(502).json({
        success: false,
        message: "Unable to deliver your request. Please try again later.",
      });
    }

    /* ========= SUCCESS ========= */
    return res.status(200).json({
      success: true,
      message: "Thank you! Our team will contact you shortly.",
    });

  } catch (error) {
    console.error("CRITICAL ERROR FULL:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}