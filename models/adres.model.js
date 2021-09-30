const sequelize = require("../db");
const { DataTypes, Sequelize } = require("sequelize");
const Student = require("./students.model");

const Adres = sequelize.define(
  "adres",
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
  },
  {
    tableName: "adresy",
  }
);

Adres.hasMany(Student);
Student.belongsTo(Adres, {
  foreignKey: "adresId",
  as: "adres",
});

module.exports = Adres;
