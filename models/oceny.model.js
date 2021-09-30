const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Ocena = sequelize.define(
  "oceny",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    przedmiot: { type: DataTypes.STRING(15) },
    ocena: { type: DataTypes.INTEGER },
  },
  {
    tableName: "oceny",
  }
);

module.exports = Ocena;
