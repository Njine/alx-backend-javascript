const request = require('request');
const { expect } = require('chai');
const { app, server } = require('./api');

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
});

describe('Cart page test', () => {
  const API_URL = 'http://localhost:7865/cart';

  it('GET /cart/:id returns correct response when :id is a number', (done) => {
    request.get(`${API_URL}/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id returns 404 when :id is not a number', (done) => {
    request.get(`${API_URL}/hello`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('Available payments test', () => {
  const API_URL = 'http://localhost:7865/available_payments';

  it('GET /available_payments returns correct response', (done) => {
    request.get(API_URL, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login test', () => {
  const API_URL = 'http://localhost:7865/login';

  it('POST /login returns correct response', (done) => {
    const options = {
      url: API_URL,
      json: {
        userName: 'Betty',
      },
    };
    request.post(options, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
