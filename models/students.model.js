const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../db");
const Ocena = require("./oceny.model");

const Student = sequelize.define("student", {
  nr_indeksu: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  nazwisko: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  imie: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

Student.hasMany(Ocena);
Ocena.belongsTo(Student, {
  foreignKey: "nr_indeksu",
});

module.exports = Student;
