const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({origin: true});
const app = express();
const nodemailer = require("nodemailer");
const config = functions.config();


const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: config.mailtrap.user,
    pass: config.mailtrap.pass,
  },
});

app.use(cors);
app.post("/", (req, res) => {
  const {name, email, message} = req.body;
  if (!name || !email || !message) {
    res.status(400).json({error: "Missing properties in payload."});
  }
  const msg = {
    to: "julceswhat@gmail.com", // Change to your recipient
    from: email, // Change to your verified sender
    subject: `Email from ${name} - Never Forget Peru`,
    text: message,
  };

  transporter.sendMail(msg, (error, _) => {
    if (error) {
      res.status(400).json({error: JSON.stringify(error)});
    } else {
      res.status(200).json({status: "OK"});
    }
  });
});
exports.email = functions.https.onRequest(app);
