const express = require('express');
const server = express();
const bodyparser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require('./lib/employee');
require('dotenv').config()

const corsOptions = {
  origin: true,
  credentials: true,
};

// passport.use(new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//     callbackURL: "auth/google/callback"
//   }, 
//   accessToken => {
//     console.log("access token: ", accessToken);
//   }
// ));
// server.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//   next();
// });
server.use(cors(corsOptions));
server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));

// server.get('/auth/google', passport.authenticate('google',{scope: 'https://www.googleapis.com/auth/plus.me https://www.google.com/m8/feeds https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'}));
// server.get('/auth/google/callback', function() {
//     passport.authenticate('google', {
//         successRedirect: '/profile',
//         failureRedirect: '/fail'
//     });
// });
server.get('/', db.employeeLogin);
server.post('/', db.getEmployeeId);
server.get('/employee/:id', db.getEmployees);
server.post('/signup', db.employeeSignup);
server.post('/logout', db.employeeLogout);

server.listen(process.env.PORT || 3000);