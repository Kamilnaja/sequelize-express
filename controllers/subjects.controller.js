const Przedmiot = require('../db/models/subjects.model');
const attributes = ['id', 'przedmiot'];

const getAllSubjects = async () => {
  return await Przedmiot.findAll({
    attributes,
  });
};

const findSubjectById = async (id) => {
  return await Przedmiot.findByPk(id, {
    attributes,
  });
};

const createSubject = async (subject) => {
  return await Przedmiot.create({ przedmiot: subject.przedmiot });
};

const updateSubject = async (id, updatedSubject) => {
  return await Przedmiot.findByPk(id)
    .then((subject) => {
      subject.update({ przedmiot: updatedSubject });
    })
    .catch((err) => err);
};

module.exports = {
  getAllSubjects,
  findSubjectById,
  createSubject,
  updateSubject,
};
