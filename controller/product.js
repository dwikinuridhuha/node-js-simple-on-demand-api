const db = require('../model');
const product = db.product;
const user = db.user;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            msg: "Product can not be empty"
        });

        return;
    }

    const dataProduct = {
        name: req.body.name,
        price: req.body.price,
        status: req.body.status
    };

    product.create(dataProduct)
        .then(data => {
            data.setUsers(req.userId).then(() => {
                res.status(200).send(data);
            });
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

exports.findAll = (req, res) => {
    // user.findOne({
    //     where: {
    //         id: req.userId
    //     }
    // }).then(dataUser => {
    //     if (!user) {
    //         return res.status(404).send({msg: "User Not found."});
    //     }
    //
    //     dataUser.getProducts().then(product => {
    //         res.send(product);
    //     })
    // }).catch(e => {
    //     res.status(500).send({msg: e})
    // });
    product.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    product.findByPk(id)
        .then(data => {
            if (data.length !== 0) {
                res.status(200).send(data);
            } else {
                res.status(400).send({
                    msg: `can't  ${id} maybe not found or req.body empty`
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

exports.update = (req, res) => {
    const id = req.params.id;

    product.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    msg: "Product is updated"
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

exports.delete = (req, res) => {
    const id = req.params.id;

    product.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    msg: "Product is deleted"
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

exports.deleteAll = (req, res) => {
    product.destroy({
        where: {},
        truncate: false
    })
        .then(num => {
            res.status(200).send({
                msg: `Product is delete all of them ${num}`
            });
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({
                msg: e
            })
        });
};

exports.findAllOpen = (req, res) => {
    product.findAll({
        where: {status: true}
    })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(e => {
            res.status(500).send({
                msg: e
            })
        })
};

exports.findAllClose = (req, res) => {
    product.findAll({
        where: {status: false}
    })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(e => {
            res.status(500).send({
                msg: e
            })
        })
};