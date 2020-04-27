'use strict'

const express = require('express');

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/liveliness', (req, res) => {
    res.send('OK').status(200);
});

app.get('/radiness', (req, res) => {
  res.send('OK').status(200);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)
