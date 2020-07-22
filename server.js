const express = require("express");
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require('dotenv').config()
const { getMaxListeners } = require("./models/testimony");



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(dotenv)


// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

app.get('/', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
});

console.log('process', process.env.USER)
app.post('/api/contact', (req, res) => {

  let data = req.body
  let output = `
  <h3>Information<h3>
  <ul>
  <li> First Name ${data.name} </li>
  <li> Last Name ${data.lastName}</li>
  <li> Email: ${data.email}</li>
  </ul>
  <h3> Message: </h3>
  <p> ${data.message} </p>
  `

  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  };
  var transporter = nodemailer.createTransport(smtpConfig);

  let mailOptions = {
    from: data.email,
    to: process.env.USER,
    subject: `message from ${data.name}`,
    html: output
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log('failure', err)
    }
    else {
      console.log('success!')
      res.send('Success')
    }
  })

  transporter.close();


});

app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Testimony");

//testing email set up:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
