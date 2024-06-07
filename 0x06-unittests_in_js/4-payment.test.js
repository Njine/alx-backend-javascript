const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const Utils = { calculateNumber: sinon.stub().returns(10) };
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(Utils, 100, 20);
    
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber.callCount).to.be.equal(1);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);
    consoleSpy.restore();
  });
});
