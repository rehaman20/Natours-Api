//Third-party modules
const nodemailer = require('nodemailer');

const sendEmail = async options => {
  //1)create a transporter
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    //Activate in Gmail "less secure app" option
  });
  //2)Define the email options
  const mailOptions = {
    from: 'Abdul Rehaman <rehamanrehaman143@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  //3)Actually send the Email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
