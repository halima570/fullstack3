const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'halima.elhagouchi1-etu@etu.univh2c.ma',
    pass: 'halima.123'
  }
});

// Define the email options
const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'your_email@gmail.com',
  subject: 'Test email',
  text: 'Hello, this is a test email from Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});