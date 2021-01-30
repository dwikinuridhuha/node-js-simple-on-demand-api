const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const db = require('../model');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            msg: "no token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(403).send({
                msg: "Unauthorized!"
            });
        }

        req.userId = decoded.id;
        next();
    });
};

// 1 super_admin
isSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            roles.forEach((role, index) => {
                if (roles[index].name === "super_admin") {
                    next();
                    return;
                }
                return res.status(403).send({
                    msg: "Require Super Admin Role!"
                });
            });
        })
    })
};


// 2 admin
isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            roles.forEach((role, index) => {
                if (roles[index].name === "admin") {
                    next();
                    return;
                }
                return res.status(403).send({
                    msg: "Require Admin Role!"
                });
            });
        })
    })
};

// 3 customer
isCustomer = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            roles.forEach((role, index) => {
                if (roles[index].name === "customer") {
                    next();
                    return;
                }
                return res.status(403).send({
                    msg: "Require Customer Role!"
                });
            });
        })
    })
};

// 4 driver
isDriver = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            roles.forEach((role, index) => {
                if (roles[index].name === "driver") {
                    next();
                    return;
                }

                return res.status(403).send({
                    msg: "Require Driver Role!"
                });
            });
        })
    })
};

// 5 merchant
isMerchant = async (req, res, next) => {
    const userData = await User.findByPk(req.userId);
    const rolesUser = await userData.getRoles();
    try {
        rolesUser.forEach((role, index) => {
            try {
                if (rolesUser[index].name === "merchant") {
                    next();
                    return;
                }
                return res.send({
                    msg: "Require Merchant Role!"
                });
            } catch (e) {
                console.log(e);
            }
        });
    } catch (e) {
        console.log(e);
    }
};

// 6 customer || admin || superAdmin
isCustomerOrAdminOrSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            console.log(roles);
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "customer") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    console.log("\n\nhello admin\n\n");
                    next();
                    return;
                }

                if (roles[i].name === "super_admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require customer or admin or super_admin Role!"
            });
        })
    })
};

// 7 driver || admin || superAdmin
isDriverOrAdminOrSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "driver") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    next();
                    return;
                }

                if (roles[i].name === "super_admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require driver or admin or super_admin Role!"
            });

            return;
        })
    })
};

// 8 merchant || admin || superAdmin
isMerchantOrAdminOrSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "merchant") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    next();
                    return;
                }

                if (roles[i].name === "super_admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require merchant or admin or super_admin Role!"
            });

            return;
        })
    })
};

// 9 customer || superAdmin
isCustomerOrSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "customer") {
                    next();
                    return;
                }

                if (roles[i].name === "super_admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require customer or super_admin Role!"
            });

            return;
        })
    })
};

// 10 driver || superAdmin
isDriverOrSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "driver") {
                    next();
                    return;
                }

                if (roles[i].name === "super_admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require driver or super_admin Role!"
            });

            return;
        })
    })
};

// 11 merchant || superAdmin
isMerchantOrSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "merchant") {
                    next();
                    return;
                }

                if (roles[i].name === "super_admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require merchant or super_admin Role!"
            });

            return;
        })
    })
};

// 12 customer || admin
isCustomerOrAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "customer") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require customer or Admin Role!"
            });

            return;
        })
    })
};

// 13 driver || admin
isDriverOrAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "driver") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require driver or Admin Role!"
            });

            return;
        })
    })
};

// 14 merchant || admin
isMerchantOrAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "merchant") {
                    next();
                    return;
                }

                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }

            return res.status(403).send({
                msg: "Require merchant or Admin Role!"
            });

            return;
        })
    })
};

const authJwt = {
    verifyToken: verifyToken,
    isSuperAdmin: isSuperAdmin,
    isAdmin: isAdmin,
    isCustomer: isCustomer,
    isDriver: isDriver,
    isMerchant: isMerchant,
    isCustomerOrAdminOrSuperAdmin: isCustomerOrAdminOrSuperAdmin,
    isDriverOrAdminOrSuperAdmin: isDriverOrAdminOrSuperAdmin,
    isMerchantOrAdminOrSuperAdmin: isMerchantOrAdminOrSuperAdmin,
    isCustomerOrSuperAdmin: isCustomerOrSuperAdmin,
    isDriverOrSuperAdmin: isDriverOrSuperAdmin,
    isMerchantOrSuperAdmin: isMerchantOrSuperAdmin,
    isCustomerOrAdmin: isCustomerOrAdmin,
    isDriverOrAdmin: isDriverOrAdmin,
    isMerchantOrAdmin: isMerchantOrAdmin
};

module.exports = authJwt;
