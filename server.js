const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const createUser = require('./backend/handlers/create-user');

app.put('/user/create', createUser);

app.listen(port);

console.log('app started on port: ' + port)