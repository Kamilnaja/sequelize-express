const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const Ocena = require('./grades.model');

const Student = sequelize.define(
  'student',
  {
    id: {
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
    tableName: 'studenci',
  }
);

Student.hasMany(Ocena);
Ocena.belongsTo(Student);

module.exports = Student;
