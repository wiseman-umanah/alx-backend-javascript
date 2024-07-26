const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (userId) {
    res.setHeader('Context-type', 'text/plain');
    res.send(`Payment methods for cart ${userId}`);
  } else {
    res.sendStatus(404);
  }
});

app.get('/available_payments', (req, res) => {
  const data = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(data);
});

app.post('/login', (req, res) => {
  const name = req.body.userName;
  res.send(`Welcome ${name}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
