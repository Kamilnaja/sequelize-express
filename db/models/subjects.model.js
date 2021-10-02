const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const Ocena = require('./grades.model');

const Przedmiot = sequelize.define(
  'przedmiot',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    przedmiot: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
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
    tableName: 'przedmioty',
  }
);

Przedmiot.hasMany(Ocena);
Ocena.belongsTo(Przedmiot);

module.exports = Przedmiot;
