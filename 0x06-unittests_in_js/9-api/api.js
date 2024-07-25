const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (userId) {
    res.setHeader('Context-type', 'text/plain')
    res.send(`Payment methods for cart ${userId}`);
  }
  else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
