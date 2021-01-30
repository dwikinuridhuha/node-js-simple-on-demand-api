module.exports = (Sequelize, sequelize) => {
  const Order = sequelize.define("orders", {
      quantity: {
          type: Sequelize.INTEGER
      },
      status: {
          type: Sequelize.STRING
      }
  });

  return Order;
};