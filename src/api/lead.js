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
    } catch (err) {
      return res.status(400).json({ success: false, message: "Invalid JSON" });
    }

    const { name, email, phone, visaType, message } = body;
    const leadSource = body.source || "Website Form";

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    /* ========= PHONE PARSE ========= */
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    let countryCode = "91";
    let phoneNumber = cleanPhone;

    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(0, cleanPhone.length - 10);
      phoneNumber = cleanPhone.slice(-10);
    }

    /* ========= CRM SYNC ========= */
    console.log("[CRM] Sending data for:", email);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const crmResponse = await fetch(
        "https://global.growmore.one/api/webhooks/website-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: name,
            Email: email,
            Phone: phoneNumber,
            Country_Code: countryCode,
            Inquiries: visaType || "General Inquiry",
            Source: leadSource,
            Message: message || "",
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      const crmText = await crmResponse.text();
      console.log("[CRM STATUS]:", crmResponse.status);
      console.log("[CRM RESPONSE]:", crmText);
    } catch (err) {
      console.error("[CRM ERROR FULL]:", err);
    }

    /* ========= EMAIL CONFIG CHECK ========= */
    const emailUser = globalThis.process?.env?.EMAIL_USER;
    const emailPass = globalThis.process?.env?.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL env variables");
      return res.status(500).json({
        success: false,
        message: "Email service not configured",
      });
    }

    /* ========= EMAIL TRANSPORT ========= */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    /* ========= SEND EMAIL ========= */
    await transporter.sendMail({
      from: `"Growmore" <${emailUser}>`,
      to: ["it@growmore.one"],
      subject: "New Appointment Booking",
      html: `
        <h3>New Lead Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Visa Type:</b> ${visaType || "Not specified"}</p>
        <p><b>Message:</b> ${message || "No message"}</p>
      `,
    });

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