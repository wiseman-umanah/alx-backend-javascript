const { describe, it } = require('mocha')
const sinon = require('sinon');
const { expect } = require('chai');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Test two functions', function () {
  it('test cse for fun', function () {
    const stubs = sinon.stub(utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stubs.called).to.be.true;
    expect(stubs.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.called).to.be.true;
    expect(spy.calledWith('The total is: 10'));
    stubs.restore();
    spy.restore();
  });
});
