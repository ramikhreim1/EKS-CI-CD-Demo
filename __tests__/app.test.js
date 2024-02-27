const request = require('supertest');
const app = require('../app');
let server;

beforeAll(() => {
  server = app.listen(4000); // Start your app on an alternative port for testing
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

describe('GET /', () => {
  it('should respond with 42 in JSON format', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: '42' });
  });

  it('should handle unknown routes with a JSON error message', async () => {
    const response = await request(server).get('/unknown');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'Resource not found' });
  });
});
