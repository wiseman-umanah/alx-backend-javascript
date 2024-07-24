const express = require('express');
const countStudents = require('./3-read_file_async');
const process = require('process');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${data}`);
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    res.send('This is the list of our students\nCannot load the database');
  }
});
app.listen(port);

module.exports = app;
