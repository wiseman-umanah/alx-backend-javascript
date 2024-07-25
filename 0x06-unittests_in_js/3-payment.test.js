const { describe, it } = require('mocha')
const sinon = require('sinon');
const { expect } = require('chai');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Test two functions', function () {
  it('test cse for fun', function () {
    const spy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.called).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
