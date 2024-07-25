/* eslint-disable no-undef */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber function', function () {
  it('adds two numbers ', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('adds two numbers ', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('adds two numbers ', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('adds two numbers ', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
