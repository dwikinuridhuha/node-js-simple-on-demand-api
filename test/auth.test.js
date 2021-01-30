const request = require('supertest');
const app = require('../server'); // the express server

describe('Auth Testing with signin and signup', () => {
    test('test a sign in', async () => {
        const res = await request(app)
            .post('/api/auth/signin')
            .send({
                username: "admin",
                password: "password"
            })
        expect(res.statusCode).toBe(200)
    });

    test('test a sign up no role', async () => {
        const res = await request(app)
            .post('/api/auth/signup')
            .send({
                username: "abc-1",
                email: "customer_1@email.com",
                password: "password"
            })
        expect(res.statusCode).toBe(200)
    });
});