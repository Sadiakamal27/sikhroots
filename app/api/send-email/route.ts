import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Generate email content based on form type
    let subject = "";
    let htmlContent = "";

    if (formType === "contact") {
      subject = `New Contact Form Submission from ${formData.fullName}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `;
    } else if (formType === "package-booking") {
      subject = `New Package Booking Inquiry from ${formData.fullName}`;
      htmlContent = `
        <h2>New Package Booking Inquiry</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Number of Travelers:</strong> ${formData.travelers}</p>
        <p><strong>Preferred Departure Date:</strong> ${formData.departureDate}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message || "No additional message"}</p>
      `;
    } else if (formType === "comment") {
      subject = `New Comment from ${formData.name} on Visa Processing Page`;
      htmlContent = `
        <h2>New Comment Received</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Website:</strong> ${formData.website || "N/A"}</p>
        <p><strong>Comment:</strong></p>
        <p>${formData.comment}</p>
      `;
    } else if (formType === "reservation") {
      subject = `New Yatra Reservation Inquiry from ${formData.name}`;
      htmlContent = `
        <h2>New Yatra Reservation Inquiry</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Total Persons:</strong> ${formData.totalPersons}</p>
        <p><strong>Total Days:</strong> ${formData.totalDays}</p>
        <p><strong>Estimated Total:</strong> ${formData.totalPrice}</p>
      `;
    }

    // Send email
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: String(error) },
      { status: 500 },
    );
  }
}
