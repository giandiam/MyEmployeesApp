const express = require('express');
const server = express();
const bodyparser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const db = require('./lib/employee');

const corsOptions = {
  origin: true,
  credentials: true,
};

server.use(cors(corsOptions));
server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));

server.get('/', db.employeeLogin);
server.post('/', db.getEmployeeId);
server.get('/employee/:id', db.getEmployees);
server.post('/signup', db.employeeSignup);
server.post('/logout', db.employeeLogout);

server.listen(process.env.PORT || 3000);