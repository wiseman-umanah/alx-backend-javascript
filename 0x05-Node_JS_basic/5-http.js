const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.write('Hello Holberton School!');
  if (req.url === '/students') {
    const data = await countStudents(process.argv[2]);
    res.write(data);
  }
  res.end();
}).listen(1245);

module.exports = app;
