const {authJwt} = require("../middleware");
const userController = require("../controller/user");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
    
        next();
    });

    app.get("/api/test/all", userController.allAccess);

    app.get(
        "/api/test/super-admin",
        [
            authJwt.verifyToken,
            authJwt.isSuperAdmin
        ],
        userController.superAdminBoard
    );

    app.get(
        "/api/test/admin",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ],
        userController.adminBoard
    );

    app.get(
        "/api/test/customer",
        [
            authJwt.verifyToken,
            authJwt.isCustomer
        ],
        userController.customerBoard
    );

    app.get(
        "/api/test/driver",
        [
            authJwt.verifyToken,
            authJwt.isDriver
        ],
        userController.driverBoard
    );

    app.get(
        "/api/test/merchant",
        [
            authJwt.verifyToken,
            authJwt.isMerchant
        ],
        userController.merchantBoard
    );
};