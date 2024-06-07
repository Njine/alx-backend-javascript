const { expect } = require('chai');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3 for (1.0, 2.0)', () => {
    expect.hasAssertions();
    expect(calculateNumber(1.0, 2.0)).toStrictEqual(3);
  });

  it('should return 3 for (1.0, 2.4)', () => {
    expect.hasAssertions();
    expect(calculateNumber(1.0, 2.4)).toStrictEqual(3);
  });

  it('should return 3 for (1.4, 2.4)', () => {
    expect.hasAssertions();
    expect(calculateNumber(1.4, 2.4)).toStrictEqual(3);
  });

  it('should return 4 for (1.0, 2.5)', () => {
    expect.hasAssertions();
    expect(calculateNumber(1.0, 2.5)).toStrictEqual(4);
  });

  it('should return 6 for (2.6, 2.5)', () => {
    expect.hasAssertions();
    expect(calculateNumber(2.6, 2.5)).toStrictEqual(6);
  });

  it('should return 5 for (2.6, 2.0)', () => {
    expect.hasAssertions();
    expect(calculateNumber(2.6, 2.0)).toStrictEqual(5);
  });

  it('should return 5 for (2.499999, 3.499999)', () => {
    expect.hasAssertions();
    expect(calculateNumber(2.499999, 3.499999)).toStrictEqual(5);
});
});
