const supertest = require('supertest');
const app = require('../src/app');

describe('Index endpoint', () => {
  it('Get / responds with "Hello, world!"', () => {
    return supertest(app).get('/').expect(200, 'Hello, world!');
  });
});
