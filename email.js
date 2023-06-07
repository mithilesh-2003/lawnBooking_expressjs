const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

exports.sendHtmlEmail = async (emailTo, subject, msg) => {
  let to = emailTo
  if (Array.isArray(emailTo)) {
    to = emailTo.join(",")
  }
  await transporter.sendMail({
    from: `"Lawn Booking" <${process.env.EMAIL_USER}>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html: msg
  });
}