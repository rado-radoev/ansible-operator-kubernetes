'use strict'

const express = require('express');

const PORT = process.env.APP_PORT || "8080";
const HOST = process.env.APP_HOST || "0.0.0.0";

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
