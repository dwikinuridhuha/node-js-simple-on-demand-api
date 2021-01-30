const request = require('supertest');
const app = require('../server'); // the express server

let token;
const idProduct = 40;

beforeAll((done) => {
    request(app)
        .post('/api/auth/signin')
        .send({
            username: "admin",
            password: "password"
        })
        .end((err, response) => {
            token = response.body.accessToken; // save the token!
            done();
        });
});

describe('Admin Role Testing', () => {
    test('log in a admin', async () => {
        const res = await request(app)
            .post('/api/auth/signin')
            .send({
                username: "admin",
                password: "password"
            })
        expect(res.statusCode).toBe(200)
    });

    test('get page test admin', () => {
        return request(app)
            .get('/api/test/admin')
            .set('x-access-token', `${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });

    // part order
    test('get all order by admin', () => {
        return request(app)
            .get('/api/customer/order')
            .set('x-access-token', `${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });
    // part order

    // part product
    test('get open product with admin', async () => {
        const res = await request(app)
            .get('/api/merchant/product/open')
            .set('x-access-token', `${token}`)
            .then(res => {
                const statusResponse = res.statusCode;
                expect(statusResponse).toBe(200);
            })
    });

    // test('get close product with admin', async () => {
    //     const res = await request(app)
    //         .get('/api/merchant/product/close')
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('get id product with admin', async () => {
    //     const id = 45;
    //     const res = await request(app)
    //         .get(`/api/merchant/product/${id}`)
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });
    // part product
});