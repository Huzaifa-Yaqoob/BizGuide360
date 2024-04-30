const nodemailer = require("nodemailer");
const transporter = require("../helpers/nodemailerTransporter");

const email = process.env.BIZ_EMAIL;

function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

async function sendOTP(receiversEmail, otp) {
  await transporter.sendMail({
    from: `"BizGuide360 website" ${process.env.BIZ_EMAIL}`,
    to: [receiversEmail],
    subject: "Your One-Time Password (OTP)",
    html: `
        <p>Dear User,</p>
        <p>You have requested a One-Time Password (OTP) to proceed with a secure action on our platform. Please use the following OTP to complete your action:</p>
        <h2>${otp}</h2>
        <p>If you did not request this OTP or need further assistance, please contact our support team immediately.</p>
        <p>Thank you for choosing our service.</p>
        <p>Best regards,<br/>BizGuide360</p>
      `,
  });
}

module.exports = { generateOTP, sendOTP };
