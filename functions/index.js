const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({origin: true});
const app = express();
const {MailtrapClient} = require("mailtrap");
const config = functions.config();


const client = new MailtrapClient({token: config.mailtrap.token});
const RECIPIENT_EMAIL = "julceswhat@gmail.com";

app.use(cors);
app.post("/", (req, res) => {
  const {name, email, message} = req.body;
  if (!name || !email || !message) {
    res.status(400).json({error: "Missing properties in payload."});
  }

  const sender = {name: "Mailtrap Test", email};

  client
      .send({
        from: sender,
        to: [{email: RECIPIENT_EMAIL}],
        subject: `Email from ${name} - Never Forget Peru`,
        text: message,
      })
      .then((_) => {
        console.log('Success')
        res.status(200).json({status: "OK"});
      }).catch((error) => {
        console.log('failure', error);
        res.status(400).json({error: JSON.stringify(error)});
      });
});
exports.email = functions.https.onRequest(app);
