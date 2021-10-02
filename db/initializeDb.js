const Ocena = require('../models/oceny.model');
const Student = require('../models/studenci.model');
const sequelize = require('../db');
const Adres = require('../models/adresy.model');

const assertDatabaseConnectionOk = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const initDb = async () => {
  await assertDatabaseConnectionOk();
  await Adres.sync({ force: true });
  await Student.sync({ force: true });
  await Ocena.sync({ force: true });
};

module.exports = {
  initDb,
};
