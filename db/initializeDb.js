const Ocena = require('../models/oceny.model');
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

const syncOceny = async () => await Ocena.sync();

const syncStudents = async () => await Student.sync();

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
  // await Ocena.create({
  //   id: '853f1604-04c7-4965-9d98-57be1c9596ed',
  //   przedmiot: 'TPL',
  //   ocena: 1,
  // });
};

async function initDb() {
  await assertDatabaseConnectionOk();
  await syncStudents();
  await createData();
  await syncOceny();
}

module.exports = {
  initDb,
};
