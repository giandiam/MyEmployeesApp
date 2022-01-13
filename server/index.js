const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

const db = require('./lib/employee');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/Employee', db.employeeLogin);

app.listen(3001);