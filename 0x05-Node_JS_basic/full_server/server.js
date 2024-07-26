const express = require('express');
const app = express();
const port = 1245;
const process = require('process');
const route = require('./routes/index');
const databaseFilename = process.argv[2]

app.use((req, res, next) => {
    req.databaseFilename = databaseFilename;
    next();
  });

app.use('/', route);

app.listen(port);

module.exports = app;

