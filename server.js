const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

const createUser = require('./backend/handlers/create-user');
const createSchedule = require('./backend/handlers/create-schedule');
const getSchedule = require('./backend/handlers/get-schedule');
const getCoordinates = require('./backend/handlers/get-coordinates');
const login = require('./backend/handlers/login');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/user/login', login);
app.post('/user/create', createUser);

app.get('/schedule', getSchedule);
app.post('/schedule/create', createSchedule);

app.get('/building', getCoodinates);

app.listen(port);

console.log('app started on port: ' + port);