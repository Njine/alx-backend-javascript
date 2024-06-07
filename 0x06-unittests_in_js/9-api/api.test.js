const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  after(() => {
    server.close();
  });

  it('GET / returns correct response', (done) => {
    request.get(API_URL, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('GET /cart/:id', () => {
    it('returns correct payment methods when :id is a number', (done) => {
      const cartId = 12;
      request.get(`${API_URL}/cart/${cartId}`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });

    it('returns 404 status code when :id is NOT a number', (done) => {
      const invalidCartId = 'hello';
      request.get(`${API_URL}/cart/${invalidCartId}`, (_err, res, _body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
