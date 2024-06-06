const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./getPaymentTokenFromAPI');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with correct response when success is true', () => {
    return getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
      });
  });
});
