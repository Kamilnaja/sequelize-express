const Ocena = require("../models/oceny.model");
const Student = require("../models/students.model");
const sequelize = require("../sequelize");

const assertDatabaseConnectionOk = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const syncOceny = async () => await Ocena.sync({ force: true });
const syncStudents = async () => await Student.sync({ force: true });

const createData = async () => {
  await Student.create({
    imie: "Kamil",
    nazwisko: "Czerwiński",
    ulica: "Armii Czerwonej",
    miasto: "Horodło",
    kod: "22-500",
  });
  await Student.create({
    imie: "Janusz",
    nazwisko: "Nosacz",
    ulica: "Grażyny Królowej Polski",
    miasto: "Horodło",
    kod: "22-500",
  });
};

async function initDb() {
  await assertDatabaseConnectionOk();
  await syncStudents();
  await syncOceny();
  await createData().catch((e) => console.error(e));

  await Student.findOne({ where: { imie: "Janusz" } }).then((item) => {
    Ocena.create({
      studentNrIndeksu: item.dataValues.nr_indeksu,
      przedmiot: "matematyka",
      ocena: 1,
    });
  });
  await Student.findOne({ where: { imie: "Kamil" } }).then((item) => {
    Ocena.create({
      studentNrIndeksu: item.dataValues.nr_indeksu,
      przedmiot: "fizyka",
      ocena: 2,
    });
  });
}

module.exports = {
  initDb,
};
