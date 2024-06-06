const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./sendPaymentRequestToApi');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const Utils = { calculateNumber: sinon.stub().returns(150) };

    sendPaymentRequestToApi(Utils, 100, 50);
    
    expect(Utils.calculateNumber.calledWith('SUM', 100, 50)).to.be.true;
    expect(Utils.calculateNumber.callCount).to.be.equal(1);
  });
});
