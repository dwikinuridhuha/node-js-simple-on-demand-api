const {authJwt} = require("../middleware");
const productController = require('../controller/product');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
    
        next();
    });
    
    app.get("/api/merchant/product", 
    [authJwt.verifyToken],
    productController.findAll); //done

    app.post("/api/merchant/product",
    [authJwt.verifyToken, authJwt.isMerchant],
    productController.create); //done

    app.delete("/api/merchant/product",
    [authJwt.verifyToken, authJwt.isMerchantOrSuperAdmin],
    productController.deleteAll); //done


    app.get("/api/merchant/product/open",
    [authJwt.verifyToken, authJwt.isMerchantOrAdminOrSuperAdmin],
    productController.findAllOpen); //done

    app.get("/api/merchant/product/close", 
    [authJwt.verifyToken, authJwt.isMerchantOrAdminOrSuperAdmin],
    productController.findAllClose); //done


    app.get("/api/merchant/product/:id",
    [authJwt.verifyToken, authJwt.isMerchantOrAdminOrSuperAdmin],
    productController.findOne); //done

    app.put("/api/merchant/product/:id",
    [authJwt.verifyToken, authJwt.isMerchantOrSuperAdmin],
    productController.update); //done

    app.delete("/api/merchant/product/:id",
    [authJwt.verifyToken, authJwt.isMerchantOrSuperAdmin],
    productController.delete); //done

};