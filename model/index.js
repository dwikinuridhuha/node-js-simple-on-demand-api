const dbConfig = require('../config/db');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // port: 12345, if use sqlite this not use
    operatorsAliases: false,
    storage: dbConfig.storage,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.crud = require("./crud")(Sequelize, sequelize);

db.order = require("./order")(Sequelize, sequelize);
db.product = require("./product")(Sequelize, sequelize);

db.user = require("./user")(Sequelize, sequelize);
db.role = require("./role")(Sequelize, sequelize);

// product user one two many order
db.user.hasMany(db.order, {as: "orders"});
db.order.belongsTo(db.user, {
   foreignKey: "userId",
   as: "user"
});

// product order relation
db.product.belongsToMany(db.order, {
    through: "order_items",
    foreignKey: "productId",
    otherKey: "orderId"
});

db.order.belongsToMany(db.product, {
    through: "order_items",
    foreignKey: "orderId",
    otherKey: "productId"
});
// product order relation

// product create relation
db.product.belongsToMany(db.user, {
    through: "product_items",
    foreignKey: "productId",
    otherKey: "userId"
});

db.user.belongsToMany(db.product, {
    through: "product_items",
    foreignKey: "userId",
    otherKey: "productId"
});
// product create relation

// user role
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
// user role

db.ROLES = ["super_admin", "admin", "customer", "driver", "merchant"];

module.exports = db;