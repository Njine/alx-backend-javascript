const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const e = require('express');

describe('sendPaymentRequestToApi', () => {
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(120);

    it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
        const bigBrother = sinon.spy(console);
        const dummy = sinon.stub(Utils, 'calculateNumber');

        dummy.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(dummy.calledWith('SUM', 100, 20)).to.equal(true);
        expect(dummy.callCount).to.equal(1);
        expect(bigBrother.log.calledWith('The total is: 10')).to.equal(true);
        expect(bigBrother.log.callCount).to.equal(1);
        dummy.restore();
        bigBrother.log.restore();
    });
});
