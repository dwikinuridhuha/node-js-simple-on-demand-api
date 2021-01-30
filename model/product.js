module.exports = (Sequelize, sequelize) => {
  const Product = sequelize.define("products", {
      name: {
          type: Sequelize.STRING
      },
      price: {
          type: Sequelize.INTEGER
      },
      status: {
          type: Sequelize.BOOLEAN
      }
  });

  return Product;
};