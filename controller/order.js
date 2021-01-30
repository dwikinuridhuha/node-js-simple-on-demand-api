const db = require('../model');
const product = db.product;
const order = db.order;
const user = db.user;

// membuat order
exports.create = (req, res) => {
    const id = req.params.id;

    product.findByPk(id)
        .then(data => {

            console.log(data);
            if (!data.status) {
                res.status(400).send({
                    msg: "Product is not availabel now"
                })
            } else {
                const dataOrder = {
                    userId: req.userId,
                    quantity: 1,
                    status: "pending"
                };

                order.create(dataOrder)
                    .then(data_order => {
                        data_order.setProducts(data.id).then(() => {
                                return res.status(200).send(data_order);
                            })
                            .catch(e => {
                                console.log(e);
                                res.status(500).send({
                                    msg: e
                                })
                            });
                    })
                    .catch(e => {
                        console.log(e);
                        res.status(500).send({
                            msg: e
                        })
                    });
            }
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

//hapus order
exports.delete = (req, res) => {
    const id = req.params.id;

    order.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    msg: "Order is deleted"
                });
            } else {
                res.status(400).send({
                    msg: `can't update ${id} maybe not found or req.body empty`
                });
            }
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

// melihat semua order
exports.findAll = (req, res) => {

    user.findByPk(req.userId, {
            include: ["orders"]
        })
        .then((dataOrder) => {
            return res.status(200).send(dataOrder);
        })
        .catch(e => {
            return res.status(500).send({
                msg: e
            })
        });
};

// update quantitiy
exports.updateQuantity = (req, res) => {
    const id = req.params.id;

    const updateData = {
        quantity: req.body.quantity
    };

    order.update(updateData, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    msg: "Order is updated"
                });
            } else {
                res.status(400).send({
                    msg: `can't order ${id} maybe not found or req.body empty`
                });
            }
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

// check harus bayar berapa total
exports.checkTotalPrice = (req, res) => {

    user.findOne({
        where: {
            id: req.userId
        }
    }).then(dataUser => {
        if (!user) {
            return res.status(404).send({
                msg: "User Not found."
            });
        }

        dataUser.getOrders().then(order => {
            // order[0].getProducts().then(item =>{
            //     res.send(item);
            // });
            let harga = {
                nilai: 0
            };

            for (let i = 0; i < order.length; i++) {

                let productQuantity = 0;
                let price = 0;

                console.log("pending: ", i);
                productQuantity = order[i].quantity;

                order[i].getProducts().then(item => {
                    price = item[0].price;
                    harga.nilai = (price * productQuantity) + harga.nilai;
                    console.log("pendign ", harga.nilai);

                    if ((i + 1) === order.length) {
                        console.log("akhir ", harga.nilai);
                        res.status(200).send({
                            msg: `Total bill : ${harga.nilai}`
                        });
                    }
                });
            }
        })
    }).catch(e => {
        res.status(500).send({
            msg: e
        })
    });

    // dataUser.getOrders().then(product => {
    //     for (let i = 0; i < product.length; i++) {
    //         console.log(product[i]);
    //     }
    // })

    // dataUser.getOrders().then(product => {
    //     productQuantity = product[0].quantity;
    //
    //     product[0].getProducts().then(item => {
    //         price = item[0].price;
    //         harga = price * productQuantity;
    //         res.send(`bayar : ${harga}`);
    //     })
    // })
};

// update to cancel
exports.updateCancel = (req, res) => {
    const id = req.params.id;

    const updateData = {
        quantity: 0,
        status: "cancel"
    };

    order.update(updateData, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    msg: "Order is updated to cancel"
                });
            } else {
                res.status(400).send({
                    msg: `can't update ${id} maybe not found or req.body empty`
                });
            }
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

// update to cancel
exports.updateDeliver = (req, res) => {
    const id = req.params.id;

    const updateData = {
        quantity: 0,
        status: "deliver"
    };

    order.update(updateData, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    msg: "Order is updated to deliver"
                });
            } else {
                res.status(400).send({
                    msg: `can't update ${id} maybe not found or req.body empty`
                });
            }
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

exports.updateDone = (req, res) => {
    const id = req.params.id;

    const updateData = {
        quantity: 0,
        status: "done"
    };

    order.update(updateData, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    msg: "Order is updated to done"
                });
            } else {
                res.status(400).send({
                    msg: `can't update ${id} maybe not found or req.body empty`
                });
            }
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};