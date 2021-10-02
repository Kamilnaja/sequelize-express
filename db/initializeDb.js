const Ocena = require('./models/grades.model');
const Student = require('./models/students.model');
const Adres = require('./models/adresses.model');
const Przedmioty = require('./models/subjects.model');

const sequelize = require('../db');

const assertDatabaseConnectionOk = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const initDb = async () => {
  await Adres.sync({ force: true });
  await Student.sync({ force: true });
  await Przedmioty.sync({ force: true });
  await Ocena.sync({ force: true });
};

module.exports = {
  initDb,
  assertDatabaseConnectionOk,
};
