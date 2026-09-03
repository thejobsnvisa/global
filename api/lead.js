import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const origin = req.headers.origin;
  const allowedOrigins = new Set([
    "http://localhost:5173",
    "https://global-murex.vercel.app",
  ]);

  if (origin && allowedOrigins.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }

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

    // Map payload from Hero.jsx fields with fallbacks
    const firstName = body.first_name || "";
    const lastName = body.last_name || "";
    const name = body.name || `${firstName} ${lastName}`.trim();
    const email = body.company_email || body.email;
    const phone = body.phone || "";
    
    // Extract inquiry and comments
    const visaType = body.visaType || body.inquiry || "General Inquiry";
    const message = body.message || body.requirements || body.comments || "";
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

      clearTimeout(timeout);

      const crmText = await crmResponse.text();
      console.log("[CRM STATUS]:", crmResponse.status);
      console.log("[CRM RESPONSE]:", crmText);
    } catch (err) {
      console.error("[CRM ERROR FULL]:", err);
    }

    /* ========= EMAIL CONFIG CHECK ========= */
    const emailUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : "";
    const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, "") : "";

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
    const info = await transporter.sendMail({
      from: `"Growmore Lead" <${emailUser}>`,
      to: ["itgrowmore2@gmail.com"],
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