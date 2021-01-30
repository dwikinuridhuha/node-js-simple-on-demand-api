const request = require('supertest');
const app = require('../server'); // the express server

let token;
const idProduct = 40;

beforeAll((done) => {
    request(app)
        .post('/api/auth/signin')
        .send({
            username: "customer",
            password: "password"
        })
        .end((err, response) => {
            token = response.body.accessToken; // save the token!
            done();
        });
});

describe('Customer Role Testing', () => {
    test('log in a customer', async () => {
        const res = await request(app)
            .post('/api/auth/signin')
            .send({
                username: "customer",
                password: "password"
            })
        expect(res.statusCode).toBe(200)
    });

    test('get all order', () => {
        return request(app)
            .get('/api/customer/order')
            .set('x-access-token', `${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });

    // test('get check total bill', () => {
    //     return request(app)
    //         .get('/api/customer/order/check')
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('create order by id product', () => {
    //     const idProduct = 41; // lihat product di database
    //     return request(app)
    //         .post(`/api/customer/order/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('delete order by id order', () => {
    //     const idOrder = 9; // lihat product di database
    //     return request(app)
    //         .delete(`/api/customer/order/${idOrder}`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('update order to cancel', () => {
    //     const idOrder = 11; // lihat product di database
    //     return request(app)
    //         .put(`/api/customer/order/${idOrder}/cancel`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('update order Quantity', () => {
    //     const idOrder = 9; // lihat product di database
    //     return request(app)
    //         .put(`/api/customer/order/${idOrder}`)
    //         .set('x-access-token', `${token}`)
    //         .send({
    //             quantity: 18
    //         })
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });
});