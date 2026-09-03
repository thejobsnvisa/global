import nodemailer from "nodemailer";

/* global process */

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

  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Ensure only POST method is allowed
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const {
      first_name,
      last_name,
      company_email,
      phone,
      company,
      requirements,
      gRecaptchaResponse,
    } = req.body || {};

    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecretKey) {
      console.error("Missing RECAPTCHA_SECRET_KEY in server environment.");
      return res
        .status(500)
        .json({ success: false, message: "Server misconfiguration." });
    }

    if (!gRecaptchaResponse) {
      return res
        .status(400)
        .json({ success: false, message: "reCAPTCHA verification failed." });
    }

    // Verify reCAPTCHA token with Google
    const recaptchaVerificationUrl =
      "https://www.google.com/recaptcha/api/siteverify";
    const verificationBody = new URLSearchParams({
      secret: recaptchaSecretKey,
      response: gRecaptchaResponse,
    });

    const recaptchaRes = await fetch(recaptchaVerificationUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verificationBody.toString(),
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return res
        .status(400)
        .json({ success: false, message: "reCAPTCHA verification failed." });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || "contact@globalmurex.com",
      subject: `New Lead: ${first_name} ${last_name}`,
      text: `
Name: ${first_name} ${last_name}
Email: ${company_email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Requirements: ${requirements || "N/A"}
      `,
      html: `
        <h3>New Lead Details</h3>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${company_email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Requirements:</strong> ${requirements || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Lead submitted successfully!" });
  } catch (error) {
    console.error("API Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
}
