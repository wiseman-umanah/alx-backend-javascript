const { describe, it } = require('mocha')
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('async handling', function () {
  it('resolve promise', function (done) {
    getPaymentTokenFromAPI(true).then((msg) => {
      expect(msg).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
