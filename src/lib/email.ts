import nodemailer from "nodemailer";

// Create the transporter with environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_SMTP_PORT),
  secure: process.env.EMAIL_SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_SMTP_USERNAME,
    pass: process.env.EMAIL_SMTP_PASSWORD,
  },
});

// Function to send activation email with OTP
export async function sendActivationEmail(
  email: string,
  otp: string, // OTP token to be sent
  username: string,
) {
  const message = {
    from: "Growlearnhub", // sender email address
    to: email, // recipient email address
    subject: "Your Growlearnhub OTP Code", // email subject
    text: `Hello, ${username}\n\nYour OTP for account verification is: ${otp}\n\nUse this code to complete your registration.`,
    html: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
          }
          .content p {
            font-size: 16px;
            line-height: 1.5;
            margin: 0 0 20px;
          }
          .otp-code {
            font-size: 32px;
            font-weight: bold;
            color: #007bff;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Growlearnhub Account Verification</h1>
          </div>
          <div class="content">
            <MutedPara>Hello, ${username}</MutedPara>
            <MutedPara>Thank you for signing up at Growlearnhub. To complete your registration, please use the OTP below:</MutedPara>
            <div class="otp-code">${otp}</div>
            <MutedPara>If you did not request this, please ignore this email.</MutedPara>
            <MutedPara>Best regards,<br>The Growlearnhub Team</MutedPara>
          </div>
          <div class="footer">
            <MutedPara>&copy; ${new Date().getFullYear()} Growlearnhub. All rights reserved.</MutedPara>
            <MutedPara>If you have any questions, contact us at <a href="mailto:smistore528982@gmail.com">smistore528982@gmail.com</a></MutedPara>
          </div>
        </div>
      </body>
    </html>
    `,
  };

  try {
    // Send the email using the transporter
    await transporter.sendMail(message);
    console.log("OTP email sent successfully");
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Failed to send verification email.");
  }
}
