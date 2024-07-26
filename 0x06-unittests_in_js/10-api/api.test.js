const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('request');

describe('test api code', function () {
  it('test request', function (done) {
    request('http://localhost:7865', function (err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('test request', function (done) {
    request('http://localhost:7865', function (err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('test request', function (done) {
    request('http://localhost:7865/about', function (err, res) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('test request', function (done) {
    request('http://localhost:7865/cart/4', function (err, res, body) {
      expect(body).to.equal('Payment methods for cart 4');
      done();
    });
  });
  it('test request', function (done) {
    request('http://localhost:7865/cart/none', function (err, res) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('test request /available', function (done) {
    request('http://localhost:7865/available_payments', function (err, res, body) {
      if (err) {
        return done(err);
      }
      const data = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(data);
      done();
    });
  });
  it('test request /login', function (done) {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    },
    function (err, res) {
      expect(res.body).to.equal('Welcome Betty');
      done();
    });
  });
});
