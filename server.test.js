const request = require('supertest');
const app = require('./server');

describe('GET /status', () => {
    test('should return application status', async () => {
        const response = await request(app).get('/status');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe(
            'Test automatic CI/CD'
        );
    });
});