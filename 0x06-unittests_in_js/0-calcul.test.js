const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // Test case for floating point whole numbers
  it('should return 3 when inputs are 1.0 and 2.0', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  // Test case for rounding down the second argument
  it('should return 3 when inputs are 1.0 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  // Test case for rounding down both arguments
  it('should return 3 when inputs are 1.4 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  // Test case for rounding down the first argument
  it('should return 3 when inputs are 1.4 and 2.0', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  // Test case for rounding up the second argument
  it('should return 4 when inputs are 1.0 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  // Test case for rounding up both arguments
  it('should return 6 when inputs are 2.6 and 2.5', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  // Test case for rounding up the first argument
  it('should return 5 when inputs are 2.6 and 2.0', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  // Test case for rounding down both arguments with trailing 9's
  it('should return 5 when inputs are 2.499999 and 3.499999', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
