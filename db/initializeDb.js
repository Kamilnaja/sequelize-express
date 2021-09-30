const Ocena = require('../models/oceny.model');
const OcenyStudentow = require('../models/ocenyStudentow');
const Student = require('../models/students.model');
const sequelize = require('../sequelize');

const assertDatabaseConnectionOk = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const syncOceny = async () => await Ocena.sync({ force: true });
const syncStudents = async () => await Student.sync({ force: true });
const syncOcenyStudentow = async () =>
  await OcenyStudentow.sync({ force: true });

const createData = async () => {
  await Student.create({
    imie: 'Kamil',
    nazwisko: 'Czerwiński',
    ulica: 'Armii Czerwonej',
    miasto: 'Horodło',
    kod: '22-500',
  });
  await Student.create({
    imie: 'Janusz',
    nazwisko: 'Nosacz',
    ulica: 'Grażyny Królowej Polski',
    miasto: 'Horodło',
    kod: '22-500',
  });
  await Ocena.create({
    id: '1',
    przedmiot: 'TPL',
    ocena: 1,
  });
};

async function initDb() {
  await assertDatabaseConnectionOk();
  await syncStudents();
  await syncOceny();
  await syncOcenyStudentow();
  await createData();
}

module.exports = {
  initDb,
};
