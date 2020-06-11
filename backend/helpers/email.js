const nodemailer = require("nodemailer");

const SMTP_TRANSPORT_URL = "";

export async function sendEmail(to, subject, text) {

    const transporter = nodemailer.createTransport(SMTP_TRANSPORT_URL);

  await transporter.sendMail({
    from: '"Amazona" <amazona@test.com>',
    to,
    subject,
    text
  });
}
