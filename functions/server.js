const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.get('/server', (req, res) => {
  res.send('server.js!');
});

module.exports.handler = serverless(app);
