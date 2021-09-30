const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../sequelize");
const Ocena = require("./oceny.model");

const Student = sequelize.define("student", {
  nr_indeksu: {
    // nr indeksu
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
});

Student.hasMany(Ocena);
Ocena.belongsTo(Student, {
  foreignKey: "nr_indeksu",
});

module.exports = Student;
