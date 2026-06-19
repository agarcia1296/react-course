import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendVerificationEmail(email, code) {
  await transporter.sendMail({
    from: `"PressPlay Marketplace" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify Your PressPlay Account",

    html: `
      <h1>Verify Your Email</h1>

      <p>Your verification code is:</p>

      <h2>${code}</h2>

      <p>This code expires in 15 minutes.</p>
    `,
  });
}