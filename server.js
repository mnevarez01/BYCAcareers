const express = require("express");
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const mongoose = require("mongoose");
const routes = require("./routes");



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Testimony");

//testing email set up:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
});


app.post('/api/contact', (req, res) => {

  let data = req.body
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: 'nevarez.mariad@gmail.com',
      pass: 'IRene060464!'
    }
  })

  let mailOptions = {
    from: data.email,
    to: 'mnevarez1220@gmail.com',
    subject: `message from ${data.name}`,
    html: `
    
    <h3>Information<h3>
    <ul>
    <li> First Name ${data.name} </li>
    <li> Last Name ${data.lastName}</li>
    <li> Email: ${data.email}</li>
    
    </ul>
    <h3> Message: </h3>
    <p> ${data.message} </p>
    `
  };

  smtpTransport.sendMail(mailOptions, (res, err) => {
    if (err) {
      res.send(err)
    }
    else {
      res.send('Success')
    }
  })

  smtpTransport.close();


})



// Define middleware here



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
