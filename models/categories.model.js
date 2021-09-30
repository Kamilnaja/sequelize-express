const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Category = sequelize.define("category", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
});

module.exports = Category;
