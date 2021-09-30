const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Ocena = require('./oceny.model');
const Student = require('./students.model');

const OcenyStudentow = sequelize.define(
  {
    Ocena_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: Ocena,
        key: 'id',
      },
    },
    Student_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: 'id',
      },
    },
  },
  {
    tableName: 'oceny_studentow',
  }
);
Ocena.belongsToMany(Student, { through: OcenyStudentow });
Ocena.belongsToMany(Student, { through: OcenyStudentow });

module.exports = OcenyStudentow;
