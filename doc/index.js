const intro = require("./intor");
const {pathAuth} = require("./auth");
const {pathProduct} = require("./product");
const {pathOrder} = require("./order");
const {patUsers} = require("./pageUser");

const path = {
    "paths": {
        ...pathAuth,
        ...pathProduct,
        ...pathOrder,
        ...patUsers
    }
}

const mergeAll = {
    ...intro,
    ...path
}

module.exports = mergeAll;