const supertest = require('supertest');
const app = require('../src/app');
const { API_URL } = require('../src/config');

describe('User router', () => {
  it('Accepts get requests', () => {
    return supertest(app)
      .get(`${API_URL}/users`)
      .expect(200)
      .expect((res) => {
        console.log(res);
        expect(res.body).to.eql([]);
      });
  });
});
