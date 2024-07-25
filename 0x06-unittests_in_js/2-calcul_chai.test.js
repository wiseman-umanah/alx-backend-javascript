const { describe, it } = require('mocha')
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculations for numbers', function () {
  describe('individual test for add', function () {
    it('adds numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('adds two number', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('adds numbers', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('adds numbers', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('adds numbers', function () {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });
  describe('individual test for subtract', function () {
    it('subtract numbers', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('subtract numbers', function () {
      expect(calculateNumber('SUBTRACT', 1, 4.5)).to.equal(-4);
    });
    it('subtract numbers', function () {
      expect(calculateNumber('SUBTRACT', 4, 4.5)).to.equal(-1);
    });
    it('subtract numbers', function () {
      expect(calculateNumber('SUBTRACT', 14, 5)).to.equal(9);
    });
  });
  describe('individual test for divide', function () {
    it('divide number', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('divide number', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('divide number', function () {
      expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
    });
    it('divide number', function () {
      expect(calculateNumber('DIVIDE', 4, 4)).to.equal(1);
    });
  });
});
