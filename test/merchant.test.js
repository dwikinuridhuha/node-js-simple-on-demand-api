const request = require('supertest');
const app = require('../server'); // the express server

let token;
const idProduct = 40;

beforeAll((done) => {
    request(app)
        .post('/api/auth/signin')
        .send({
            username: "merchant",
            password: "password"
        })
        .end((err, response) => {
            token = response.body.accessToken; // save the token!
            done();
        });
});

describe('Merchant Role Testing', () => {
    test('log in a merchant', async () => {
        const res = await request(app)
            .post('/api/auth/signin')
            .send({
                username: "merchant",
                password: "password"
            })
        expect(res.statusCode).toEqual(200)
    });

    test('get all product', () => {
        return request(app)
            .get('/api/merchant/product')
            .set('x-access-token', `${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });

    // test('get page test merchant', () => {
    //     return request(app)
    //         .get('/api/test/merchant')
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('post a product', async () => {
    //     const res = await request(app)
    //         .post('/api/merchant/product')
    //         .set('x-access-token', `${token}`)
    //         .send({
    //             name: "name",
    //             price: 121,
    //             status: true
    //         }).then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('get open product', async () => {
    //     const res = await request(app)
    //         .get('/api/merchant/product/open')
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('get close product', async () => {
    //     const res = await request(app)
    //         .get('/api/merchant/product/close')
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('put or update a product', async () => {
    //     const res = await request(app)
    //         .get(`/api/merchant/product/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('put or update a product', async () => {
    //     const res = await request(app)
    //         .put(`/api/merchant/product/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .send({
    //             price: 120,
    //         })
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('delete a product by id', async () => {
    //     const idProduct = 1;

    //     const res = await request(app)
    //         .delete(`/api/merchant/product/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('delete all product', async () => {
    //     const res = await request(app)
    //         .delete('/api/merchant/product')
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });
});