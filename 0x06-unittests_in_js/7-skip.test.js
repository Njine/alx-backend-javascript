const { expect } = require('chai');

describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect.hasAssertions();
    expect(1 === 1).to.be.true;
  });

  it('2 is equal to 2', () => {
    expect.hasAssertions();
    expect(2 === 2).to.be.true;
  });

  it.skip('1 is equal to 3', () => {
    expect.hasAssertions();
    expect(1 === 3).to.be.true;
  });

  it('3 is equal to 3', () => {
    expect.hasAssertions();
    expect(3 === 3).to.be.true;
  });

  it('4 is equal to 4', () => {
    expect.hasAssertions();
    expect(4 === 4).to.be.true;
  });

  it('5 is equal to 5', () => {
    expect.hasAssertions();
    expect(5 === 5).to.be.true;
  });

  it('6 is equal to 6', () => {
    expect.hasAssertions();
    expect(6 === 6).to.be.true;
  });

  it('7 is equal to 7', () => {
    expect.hasAssertions();
    expect(7 === 7).to.be.true;
  });
});
