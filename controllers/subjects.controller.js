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

const findSubjectByName = async (name) => {
  return await Przedmiot.findOne({ where: { przedmiot: name } });
};

const createSubject = async (subject) => {
  return await Przedmiot.create({ przedmiot: subject });
};

const updateSubject = async (subject, updatedSubject) => {
  return await subject.update({ przedmiot: updatedSubject });
};

const deleteSubject = async (subject, id) => {
  return await subject.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  getAllSubjects,
  findSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
  findSubjectByName,
};
