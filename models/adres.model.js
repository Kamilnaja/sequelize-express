const sequelize = require('../db');
const { DataTypes, Sequelize } = require('sequelize');
const Student = require('./students.model');

const Adres = sequelize.define(
  'adresy',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    ulica: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    miasto: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    kod: {
      type: DataTypes.STRING(6),
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
    tableName: 'adresy',
    freezeTableName: true,
  }
);

Student.belongsTo(Adres);
Adres.hasMany(Student);

module.exports = Adres;
