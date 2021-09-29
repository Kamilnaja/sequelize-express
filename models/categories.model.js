const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.defined('category', {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      unique: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
  });
};
