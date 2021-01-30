const request = require('supertest');
const app = require('../server'); // the express server

let token;
const idProduct = 42; // lihat product di database
const idOrder = 13; // lihat product di database
beforeAll((done) => {
    request(app)
        .post('/api/auth/signin')
        .send({
            username: "superAdmin",
            password: "password"
        })
        .end((err, response) => {
            token = response.body.accessToken; // save the token!
            done();
        });
});

describe('Super Admin Role Testing', () => {
    test('log in a super admin', async () => {
        const res = await request(app)
            .post('/api/auth/signin')
            .send({
                username: "superAdmin",
                password: "password"
            })
        expect(res.statusCode).toBe(200)
    });

    test('get page test super admin', () => {
        return request(app)
            .get('/api/test/super-admin')
            .set('x-access-token', `${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });

    // part customer
    // test('get order with super admin', () => {
    //     return request(app)
    //         .get('/api/customer/order')
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('create order by id product with super admin', () => {
    //     return request(app)
    //         .post(`/api/customer/order/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('delete order by id order with super admin', () => {
    //     return request(app)
    //         .delete(`/api/customer/order/${idOrder}`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('update order to cancel with super admin', () => {
    //     return request(app)
    //         .put(`/api/customer/order/${idOrder}/cancel`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('update order Quantity with super admin', () => {
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
    // part customer

    // part Driver
    // test('update order to deliver with super admin', () => {
    //     const idOrder = 13; // lihat product di database untuk mengetahui id nya
    //     return request(app)
    //         .put(`/api/driver/order/${idOrder}/deliver`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });

    // test('update order to done with super admin', () => {
    //     const idOrder = 13; // lihat product di database untuk mengetahui id nya
    //     return request(app)
    //         .put(`/api/driver/order/${idOrder}/done`)
    //         .set('x-access-token', `${token}`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(200);
    //         });
    // });
    // part Driver

    // part merchant
    // test('get open product with super admin', async () => {
    //     const res = await request(app)
    //         .get('/api/merchant/product/open')
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('get close product with super admin', async () => {
    //     const res = await request(app)
    //         .get('/api/merchant/product/close')
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('put or update a product with super admin', async () => {
    //     const res = await request(app)
    //         .get(`/api/merchant/product/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('put or update a product with super admin', async () => {
    //     const res = await request(app)
    //         .put(`/api/merchant/product/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .send({
    //             price: 100,
    //         })
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('delete a product by id with super admin', async () => {
    //     const res = await request(app)
    //         .delete(`/api/merchant/product/${idProduct}`)
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });

    // test('delete all product with super admin', async () => {
    //     const res = await request(app)
    //         .delete('/api/merchant/product')
    //         .set('x-access-token', `${token}`)
    //         .then(res => {
    //             const statusResponse = res.statusCode;
    //             expect(statusResponse).toBe(200);
    //         })
    // });
    // part merchant
});