const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// stsic website folder
app.use('/', express.static(path.join(__dirname, 'site')));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req, res) => {
   res.sendFile(__dirname + "/site");
});
//app.get('/',(req, res) => {
   //res.send('hello');
  //res.render('contact');
//   res.redirect('/index.html');
//});

app.post('/send', (req, res) => {
   const output =`
   <p>This is a test message</p>
   `;

   let transporter = nodemailer.createTransport({
      host: "smtp.ionos.co.uk",
      port: 587,
      secure: false,
      auth: {
        user: "sanj@contagiousdjs.com",
        pass: "sanjay01"
      },
      tls:{
         rejectUnauthorized:false
      }
    });

    let mailOptions = {
      from: '"Nodemailer" <sanj@contagiousdjs.com>', // sender address
      to: "bp@ivnet.co.uk",
      subject: "Hello", 
      text: "Hello world?",
      html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return console.log(error);
      }

      console.log('Message sent: %s',info.messageId)
    });
  
});

app.listen(3000, () => console.log('Server started...'));
