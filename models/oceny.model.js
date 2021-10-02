const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ocena = sequelize.define(
  'oceny',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    przedmiot: { type: DataTypes.STRING(15) },
    ocena: { type: DataTypes.INTEGER },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
  },
  {
    tableName: 'oceny',
  }
);

module.exports = Ocena;
