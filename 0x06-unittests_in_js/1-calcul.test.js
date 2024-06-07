const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -6);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, -4.5), -4);
    });

    it('equal numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 1.4), 2);
    });

    it('equal rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 1.5), 3);
    });

    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 4.5), 5);
    });

    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 0, -4.5), -4);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    // Test cases for SUBTRACT
  });

  describe('type == "DIVIDE"', () => {
    // Test cases for DIVIDE
  });
});
