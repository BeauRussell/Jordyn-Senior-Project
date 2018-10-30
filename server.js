const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

const createUser = require('./backend/handlers/create-user');
const createSchedule = require('./backend/handlers/create-schedule');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user/create', createUser);

app.post('/schedule/create', createSchedule);

app.listen(port);

console.log('app started on port: ' + port)