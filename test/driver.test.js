const request = require('supertest');
const app = require('../server'); // the express server

let token;
const idProduct = 40;

beforeAll((done) => {
    request(app)
        .post('/api/auth/signin')
        .send({
            username: "driver",
            password: "password"
        })
        .end((err, response) => {
            token = response.body.accessToken; // save the token!
            done();
        });
});

describe('Driver Role Testing', () => {
    test('log in a driver', async () => {
        const res = await request(app)
            .post('/api/auth/signin')
            .send({
                username: "driver",
                password: "password"
            })
        expect(res.statusCode).toBe(200)
    });

    test('get page test driver', () => {
        return request(app)
            .get('/api/test/driver')
            .set('x-access-token', `${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });

    // test('update order to deliver', () => {
    //     const idOrder = 11; // lihat product di database untuk mengetahui id nya
    //     return request(app)
    //         .put(`/api/driver/order/${idOrder}/deliver`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('update order to done', () => {
    //     const idOrder = 12; // lihat product di database untuk mengetahui id nya
    //     return request(app)
    //         .put(`/api/driver/order/${idOrder}/done`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });
});