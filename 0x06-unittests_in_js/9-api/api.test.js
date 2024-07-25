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
});
