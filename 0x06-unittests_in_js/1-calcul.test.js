const assert = require('assert');
const { describe, it } = require('mocha')
const calculateNumber = require('./1-calcul');

describe('calculations for numbers', function () {
  describe('individual test for add', function () {
    it('adds numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('adds two number', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('adds numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('adds numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('adds numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });
  describe('individual test for subtract', function () {
    it('subtract numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('subtract numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 4.5), -4);
    });
    it('subtract numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 4.5), -1);
    });
    it('subtract numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 14, 5), 9);
    });
  });
  describe('individual test for divide', function () {
    it('divide number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('divide number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('divide number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0);
    });
    it('divide number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 4), 1);
    });
  });
});
