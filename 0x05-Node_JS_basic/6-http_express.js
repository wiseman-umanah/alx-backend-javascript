const express = require('express');
const { module } = require('../webpack.config');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(port);

module.exports = app;