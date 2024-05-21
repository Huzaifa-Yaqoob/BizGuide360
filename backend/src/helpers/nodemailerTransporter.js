const nodemailer = require("nodemailer");

const email = process.env.BIZ_EMAIL;
const password = process.env.BIZ_EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
  headers: {
    "X-No-Archive": true,
    Precedence: "bulk",
  },
});

module.exports = transporter;
