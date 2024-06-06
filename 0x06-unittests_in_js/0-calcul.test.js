const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3 for (1.0, 2.0)', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should return 3 for (1.0, 2.4)', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should return 3 for (1.4, 2.4)', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

it('should return 4 for (1.0, 2.5)', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
});

it('should return 6 for (2.6, 2.5)', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
});

it('should return 5 for (2.6, 2.0)', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
});

  it('should return 5 for (2.499999, 3.499999)', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
