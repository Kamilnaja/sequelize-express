const sequelize = require("../sequelize");

const Product = sequelize.define("product", {
  id: {
    allowNull: false,
  },
});
