const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  it('POST /login returns correct response with username', (done) => {
    const username = 'Betty';
    request.post(
      {
        url: `${API_URL}/login`,
        json: { userName: username }
      },
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Welcome ${username}`);
        done();
      }
    );
  });
});
