import { z } from 'zod';
import nodemailer from 'nodemailer';
import { Contact } from '../models/Contact.js';

const contactValidationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(3000),
});

/**
 * Dynamically gets or creates the Nodemailer transporter using process.env at runtime
 */
const getTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailService = process.env.EMAIL_SERVICE || 'gmail';

  if (!emailUser || !emailPass) {
    console.warn('⚠️ EMAIL_USER or EMAIL_PASS missing from environment variables');
    return null;
  }

  return nodemailer.createTransport({
    service: emailService,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

/**
 * Generate standard HTML email template
 */
const buildEmailHtml = ({ name, email, subject, message }) => `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background: #f5f0e8; border-radius: 12px; overflow: hidden;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #C8A96E 0%, #7DAE82 100%); padding: 32px 32px 24px; text-align: center;">
      <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #fff; letter-spacing: -0.3px;">
        📩 New Portfolio Message
      </h1>
      <p style="margin: 8px 0 0; font-size: 13px; color: rgba(255,255,255,0.85);">
        Someone contacted you via your portfolio website
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 28px 32px; background: #ffffff;">
      <!-- Sender Info -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 10px 14px; background: #f7f3ec; border-radius: 8px 8px 0 0; border-bottom: 1px solid #ede8dc;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #9B7A3E;">From</span><br>
            <span style="font-size: 15px; font-weight: 700; color: #1C1A14;">${name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; background: #f7f3ec; border-bottom: 1px solid #ede8dc;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #9B7A3E;">Email</span><br>
            <a href="mailto:${email}" style="font-size: 14px; color: #5A8A5E; font-weight: 600; text-decoration: none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; background: #f7f3ec; border-radius: 0 0 8px 8px;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #9B7A3E;">Subject</span><br>
            <span style="font-size: 14px; font-weight: 600; color: #1C1A14;">${subject || 'No subject provided'}</span>
          </td>
        </tr>
      </table>

      <!-- Message -->
      <div style="background: #f7f3ec; border-left: 4px solid #C8A96E; border-radius: 0 8px 8px 0; padding: 16px 18px; margin-bottom: 20px;">
        <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #9B7A3E; margin: 0 0 10px;">Message</p>
        <p style="font-size: 14px; line-height: 1.75; color: #3A3328; white-space: pre-wrap; margin: 0;">${message}</p>
      </div>

      <!-- Reply button -->
      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${email}?subject=Re: ${subject || 'Your Portfolio Message'}"
           style="display: inline-block; padding: 12px 32px; background: linear-gradient(135deg, #C8A96E, #7DAE82); color: #fff; border-radius: 10px; text-decoration: none; font-size: 14px; font-weight: 700; letter-spacing: 0.02em;">
          Reply to ${name}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding: 16px 32px; background: #ede8dc; text-align: center;">
      <p style="font-size: 11px; color: #7A7060; margin: 0;">
        Sent from <strong>Jawad Khan's Portfolio</strong> contact form
      </p>
    </div>
  </div>
`;

/**
 * Dispatch email via Resend HTTP REST API
 */
const sendViaResend = async ({ name, email, subject, message, recipient, htmlContent }) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not defined in environment variables');
  }
  const from = process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: email,
      subject: `📩 Portfolio Message from ${name}: ${subject || 'New Contact Request'}`,
      html: htmlContent,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `Resend API error: HTTP ${response.status}`);
  }

  return data;
};

export const submitContactForm = async (req, res, next) => {
  try {
    const parseResult = contactValidationSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: parseResult.error.flatten().fieldErrors,
      });
    }

    const { name, email, subject, message } = parseResult.data;
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    /* ── 1. Save to MongoDB (resilience layer) ── */
    let savedContact = null;
    try {
      savedContact = await Contact.create({
        name,
        email,
        subject: subject || 'Portfolio Contact Form Submission',
        message,
        ipAddress,
      });
    } catch (dbErr) {
      console.warn('MongoDB save warning:', dbErr.message);
    }

    /* ── 2. Send notification email (Resend API with Nodemailer fallback) ── */
    const recipient = process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER || 'jawad.khan4915@gmail.com';
    const htmlContent = buildEmailHtml({ name, email, subject, message });
    let emailSent = false;
    let deliveryProvider = null;

    // A. Attempt Resend HTTP API first (Render cloud-native, immune to SMTP port blocks)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendResult = await sendViaResend({
          name,
          email,
          subject,
          message,
          recipient,
          htmlContent,
        });
        console.log(`✅ [Resend] Email dispatched successfully! ID: ${resendResult.id}`);
        emailSent = true;
        deliveryProvider = 'resend';
      } catch (resendErr) {
        console.warn('⚠️ [Resend] API dispatch failed, falling back to Nodemailer:', resendErr.message);
      }
    }

    // B. Fallback to Nodemailer Gmail SMTP if Resend didn't send
    if (!emailSent) {
      const transporter = getTransporter();
      if (transporter) {
        const sender = process.env.EMAIL_USER || 'jawad.khan4915@gmail.com';
        const mailOptions = {
          from: `"Portfolio Contact" <${sender}>`,
          to: recipient,
          replyTo: email,
          subject: `📩 Portfolio Message from ${name}: ${subject || 'New Contact Request'}`,
          html: htmlContent,
        };

        try {
          const info = await transporter.sendMail(mailOptions);
          console.log(`✅ [Nodemailer] Email dispatched successfully! Message ID: ${info.messageId}`);
          emailSent = true;
          deliveryProvider = 'nodemailer';
        } catch (nodemailerErr) {
          console.error('❌ [Nodemailer] Dispatch failed:', nodemailerErr.message);
          return res.status(500).json({
            success: false,
            message: `Failed to deliver email: ${nodemailerErr.message}`,
          });
        }
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been sent successfully.',
      emailSent,
      provider: deliveryProvider,
      data: savedContact ? { id: savedContact._id, createdAt: savedContact.createdAt } : null,
    });
  } catch (error) {
    next(error);
  }
};
