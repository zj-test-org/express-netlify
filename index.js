const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.get('/ind', (req, res) => {
  res.send('index.js!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
