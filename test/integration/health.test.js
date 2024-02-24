const request = require('supertest');
const { app } = require('../../app');

describe('Integration Tests', () => {
  let server;
  beforeAll((done) => {
    server = app.listen(done);
  })

  afterAll((done) => {
    server.close(done);
  });

  it('should return a 200 OK status code for GET request to /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });
});