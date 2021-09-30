const Ocena = require("../models/oceny.model");
const Student = require("../models/students.model");
const sequelize = require("../db");
const Adres = require("../models/adres.model");

const assertDatabaseConnectionOk = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const createStudent = async (imie, nazwisko, adresId) => {
  await Student.create({
    imie,
    nazwisko,
    adresId,
  });
};

const createAdresses = async () => {
  await Adres.create({
    ulica: "Armii Czerwonej",
    miasto: "Horodło",
    kod: "22-500",
  });

  await Adres.create({
    ulica: "Grażyny Królowej Polski",
    miasto: "Horodło",
    kod: "22-501",
  });
};

async function initDb() {
  await assertDatabaseConnectionOk();
  await Adres.sync({ force: true });
  await Student.sync({ force: true });
  await Ocena.sync({ force: true });
  await createAdresses();

  await Adres.findOne({ where: { kod: "22-501" } }).then((item) => {
    const { id } = item.dataValues;

    createStudent("Kamil", "Naja", id);
  });

  await Adres.findOne({ where: { kod: "22-500" } }).then((item) => {
    const { id } = item.dataValues;

    createStudent("Ajan", "Brahm", id);
  });

  await Student.findOne({ where: { imie: "Kamil" } }).then((item) => {
    const { nr_indeksu } = item.dataValues;

    Ocena.create({
      studentNrIndeksu: nr_indeksu,
      przedmiot: "matematyka",
      ocena: 3,
    });
  });

  await Student.findOne({ where: { imie: "Kamil" } }).then((item) => {
    const { nr_indeksu } = item.dataValues;

    Ocena.create({
      studentNrIndeksu: nr_indeksu,
      przedmiot: "fizyka",
      ocena: 2,
    });
  });
}

module.exports = {
  initDb,
};
