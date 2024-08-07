const http = require('http');
const process = require('process');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') res.write('Hello Holberton School!');
    if (req.url === '/students') {
      const data = await countStudents(process.argv[2]);
      res.write(`This is the list of our students\n${data}`);
    }
  // eslint-disable-next-line no-unused-vars
  } catch (err) {
    res.write('This is the list of our students\nCannot load database');
  } finally {
    res.end();
  }
}).listen(1245);

module.exports = app;
