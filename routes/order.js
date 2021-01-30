const {authJwt} = require("../middleware");
const orderController = require('../controller/order');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
    
        next();
    });
    
    app.get("/api/customer/order", 
    [authJwt.verifyToken, authJwt.isCustomerOrAdminOrSuperAdmin], 
    orderController.findAll); //done

    app.get("/api/customer/order/check", 
    [authJwt.verifyToken, authJwt.isCustomer], 
    orderController.checkTotalPrice); //done

    app.post("/api/customer/order/:id", 
    [authJwt.verifyToken, authJwt.isCustomerOrSuperAdmin], 
    orderController.create); //done

    app.delete("/api/customer/order/:id", 
    [authJwt.verifyToken, authJwt.isCustomerOrSuperAdmin], 
    orderController.delete); //done

    app.put("/api/customer/order/:id", 
    [authJwt.verifyToken, authJwt.isCustomerOrSuperAdmin], 
    orderController.updateQuantity); //done

    app.put("/api/customer/order/:id/cancel", 
    [authJwt.verifyToken, authJwt.isCustomerOrSuperAdmin], 
    orderController.updateCancel); // done


    app.put("/api/driver/order/:id/deliver", 
    [authJwt.verifyToken, authJwt.isDriverOrSuperAdmin], 
    orderController.updateDeliver); // done

    app.put("/api/driver/order/:id/done", 
    [authJwt.verifyToken, authJwt.isDriverOrSuperAdmin], 
    orderController.updateDone); // done

};