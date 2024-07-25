const sinon = require('sinon');
const { describe, it, beforeEach, afterEach } = require('mocha')
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('testing with hooks', function () {
  let spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });
  it('call payment function', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });
  it('call payment function', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
