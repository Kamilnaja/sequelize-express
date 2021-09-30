const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Ocena = sequelize.define(
  'oceny',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nr_indeksu: { type: DataTypes.UUID },
    przedmiot: { type: DataTypes.STRING(15) },
    ocena: { type: DataTypes.INTEGER },
  },
  {
    tableName: 'oceny',
  }
);

module.exports = Ocena;
