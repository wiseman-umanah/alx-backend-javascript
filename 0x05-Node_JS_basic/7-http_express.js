const express = require('express');
const countStudents = require('./3-read_file_async');


const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
    const data = await countStudents(process.argv[2]);
    res.send(data);
})
app.listen(port);

module.exports = app;
