/* global process */
import nodemailer from "nodemailer";

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
      return res.status(400).json({ success: false, message: "Request body must be a JSON object" });
    }

    const firstName = String(body.first_name || "");
    const lastName = String(body.last_name || "");
    const name = String(body.name || `${firstName} ${lastName}`.trim()).trim();
    const email = String(body.company_email || body.email || "").trim();
    const phone = String(body.phone || "");
    
    const visaType = String(body.visaType || body.inquiry || "General Inquiry");
    const message = String(body.message || body.requirements || body.comments || "");
    const leadSource = String(body.source || "Website Form");

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    /* ========= PHONE PARSE ========= */
    const cleanPhone = phone.replace(/\D/g, "");
    let countryCode = "91";
    let phoneNumber = cleanPhone;

    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(0, cleanPhone.length - 10);
      phoneNumber = cleanPhone.slice(-10);
    }

    /* ========= CRM SYNC ========= */
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      try {
        await fetch(
          "https://case.growmore.one/api/webhooks/website-form",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              Name: name,
              Email: email,
              Phone: phoneNumber,
              Country_Code: countryCode,
              Inquiries: visaType,
              Source: leadSource,
              Message: message,
            }),
            signal: controller.signal,
          }
        );
      } finally {
        clearTimeout(timeout);
      }
    } catch (err) {
      console.error("[CRM ERROR FULL]:", err);
    }

    /* ========= EMAIL CONFIG CHECK ========= */
    const emailUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : "";
    const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, "") : "";

    if (!emailUser || !emailPass) {
      return res.status(500).json({
        success: false,
        message: "Email configuration error: Missing EMAIL_USER or EMAIL_PASS environment variables.",
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const info = await transporter.sendMail({
        from: `"Growmore Global Lead" <${emailUser}>`,
        to: ["study@growmore.one"],
        replyTo: email,
        subject: `New Lead: ${name} - ${visaType}`,
        html: `
          <h3>New Lead Appointment Details</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Visa Type:</b> ${visaType}</p>
          <p><b>Message:</b> ${message || "No message"}</p>
        `,
      });

      console.log("[SMTP SUCCESS]: Message ID:", info.messageId);
    } catch (err) {
      console.error("[SMTP ERROR FULL]:", err);
      // Return the exact error to the client for debugging
      return res.status(500).json({
        success: false,
        message: "Failed to send email via SMTP",
        error: err.message,
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