const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const db = require('./lib/employee');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }));

app.get('/', db.employeeLogin);
app.post('/', db.sessionUsername);
app.get('/employee', db.employee);
app.post('/signup', db.employeeSignup);

app.listen(process.env.PORT || 3001);