import { z } from 'zod';
import nodemailer from 'nodemailer';
import { Contact } from '../models/Contact.js';

const contactValidationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(3000),
});

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

    // Save to database
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

    // Nodemailer notification (if configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: process.env.EMAIL_SERVICE || 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          replyTo: email,
          subject: `Portfolio Message: ${subject || 'New Contact Request'} - from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b0f1a; color: #f5f7fa; border-radius: 8px;">
              <h2 style="color: #00d4ff; border-bottom: 2px solid #6c63ff; padding-bottom: 8px;">New Contact Form Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #6c63ff;">${email}</a></p>
              <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
              <p><strong>IP Address:</strong> ${ipAddress}</p>
              <div style="background-color: #161d2e; padding: 15px; border-radius: 6px; margin-top: 15px; border-left: 4px solid #00d4ff;">
                <h4 style="margin-top:0; color: #a0aac0;">Message:</h4>
                <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
              <p style="font-size: 12px; color: #6b7488; margin-top: 20px;">Sent automatically from Jawad Khan's Portfolio API.</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailErr) {
        console.warn('Email notification warning:', emailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been sent successfully.',
      data: savedContact ? { id: savedContact._id, createdAt: savedContact.createdAt } : null,
    });
  } catch (error) {
    next(error);
  }
};
