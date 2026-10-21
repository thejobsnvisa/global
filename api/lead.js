
/* global process */
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const origin = req.headers.origin;

  /* ========= CORS ========= */
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    /* ========= SAFE BODY PARSE ========= */
    let body;

    try {
      body =
        typeof req.body === "string"
          ? JSON.parse(req.body)
          : req.body;
    } catch {
      return res.status(400).json({
        success: false,
        message: "Invalid JSON",
      });
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return res.status(400).json({
        success: false,
        message: "Request body must be a JSON object",
      });
    }

    /* ========= FORM DATA ========= */
    const firstName = String(body.first_name || "");
    const lastName = String(body.last_name || "");

    const name = String(
      body.name || `${firstName} ${lastName}`.trim()
    ).trim();

    const email = String(
      body.company_email || body.email || ""
    ).trim();

    const phone = String(body.phone || "").trim();

    const visaType = String(
      body.visaType || body.inquiry || "General Inquiry"
    ).trim();

    const message = String(
      body.message ||
        body.requirements ||
        body.comments ||
        ""
    ).trim();

    const leadSource = String(
      body.source || "Website Form"
    ).trim();

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    /* ========= PHONE PARSE ========= */
    const cleanPhone = phone.replace(/\D/g, "");

    let countryCode = "91";
    let phoneNumber = cleanPhone;

    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(
        0,
        cleanPhone.length - 10
      );
      phoneNumber = cleanPhone.slice(-10);
    }

    /* ========= CRM SYNC ========= */
    let crmSuccess = false;

    try {
      console.log("[CRM] Sending lead:", email);

      const controller = new AbortController();
      const timeout = setTimeout(
        () => controller.abort(),
        10000
      );

      let crmResponse;

      try {
        crmResponse = await fetch(
          "https://case.growmore.one/api/webhooks/website-form",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
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

      const crmText = await crmResponse.text();

      console.log("[CRM STATUS]:", crmResponse.status);
      console.log("[CRM RESPONSE]:", crmText);

      crmSuccess = crmResponse.ok;

      if (!crmSuccess) {
        console.error(
          "[CRM ERROR] HTTP status:",
          crmResponse.status
        );
      }
    } catch (err) {
      console.error("[CRM ERROR]:", err.message);
    }

    /* ========= EMAIL CONFIG CHECK ========= */
    const emailUser = (
      process.env.EMAIL_USER || ""
    ).trim();

    const emailPass = (
      process.env.EMAIL_PASS || ""
    ).replace(/\s+/g, "");

    if (!emailUser || !emailPass) {
      console.error(
        "[EMAIL CONFIG ERROR] EMAIL_USER or EMAIL_PASS is missing"
      );

      return res.status(500).json({
        success: false,
        crmSuccess,
        emailSuccess: false,
        message:
          "Email configuration is missing. Check Vercel environment variables.",
      });
    }

    /* ========= GMAIL SMTP CONFIG ========= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 30000,
    });

    /* ========= VERIFY GMAIL AUTHENTICATION ========= */
    try {
      await transporter.verify();

      console.log(
        "[SMTP VERIFIED] Gmail connection and authentication successful"
      );
    } catch (err) {
      console.error("[SMTP AUTH ERROR]:", {
        code: err.code,
        command: err.command,
        responseCode: err.responseCode,
        response: err.response,
        message: err.message,
      });

      return res.status(502).json({
        success: false,
        crmSuccess,
        emailSuccess: false,
        message:
          "Gmail SMTP authentication failed. Check EMAIL_USER and EMAIL_PASS.",
        errorCode: err.code || "SMTP_AUTH_ERROR",
      });
    }

    /* ========= ESCAPE HTML ========= */
    const escapeHtml = (value) =>
      String(value).replace(/[&<>"']/g, (char) => {
        const entities = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };

        return entities[char];
      });

    /* ========= SEND EMAIL ========= */
    try {
      const recipient = "itgrowmore2@gmail.com";

      const info = await transporter.sendMail({
        from: {
          name: "Growmore Lead",
          address: emailUser,
        },
        to: recipient,
        replyTo: email,
        subject: `New Lead: ${name} - ${visaType}`,

        text: [
          "New Lead Appointment Details",
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "N/A"}`,
          `Visa Type: ${visaType}`,
          `Source: ${leadSource}`,
          `Message: ${message || "No message"}`,
        ].join("\n"),

        html: `
          <h3>New Lead Appointment Details</h3>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Phone:</b> ${escapeHtml(phone || "N/A")}</p>
          <p><b>Visa Type:</b> ${escapeHtml(visaType)}</p>
          <p><b>Source:</b> ${escapeHtml(leadSource)}</p>
          <p><b>Message:</b> ${escapeHtml(message || "No message")}</p>
        `,
      });

      console.log("[SMTP SEND RESULT]:", {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
      });

      /* ========= CHECK RECIPIENT ACCEPTANCE ========= */
      const accepted = (info.accepted || []).some(
        (address) =>
          address.toLowerCase() === recipient.toLowerCase()
      );

      if (!accepted) {
        console.error(
          "[EMAIL ERROR] Recipient was not accepted by SMTP"
        );

        return res.status(502).json({
          success: false,
          crmSuccess,
          emailSuccess: false,
          message:
            "The email server did not accept the recipient.",
        });
      }

      /* ========= SUCCESS ========= */
      console.log(
        "[EMAIL SUCCESS] Message accepted by Gmail:",
        info.messageId
      );

      return res.status(200).json({
        success: true,
        crmSuccess,
        emailSuccess: true,
        message:
          "Thank you! Your inquiry has been submitted successfully.",
      });
    } catch (err) {
      console.error("[SMTP SEND ERROR]:", {
        code: err.code,
        command: err.command,
        responseCode: err.responseCode,
        response: err.response,
        message: err.message,
      });

      return res.status(502).json({
        success: false,
        crmSuccess,
        emailSuccess: false,
        message:
          "Your inquiry could not be confirmed by the email server.",
        errorCode: err.code || "SMTP_SEND_FAILED",
      });
    }
  } catch (error) {
    console.error("[CRITICAL API ERROR]:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
