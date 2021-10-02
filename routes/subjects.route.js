const express = require('express');
const router = express.Router();
const subjectCtrl = require('../controllers/subjects.controller');

router.get('/', async (req, res, next) => {
  try {
    res.json(await subjectCtrl.getAllSubjects());
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.json(await subjectCtrl.findSubjectById(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  let { przedmiot } = body;
  przedmiot = przedmiot.trim();
  // todo - handle duplication
  try {
    const item = await subjectCtrl.findSubjectByName(przedmiot);
    if (!item) {
      await subjectCtrl.createSubject(przedmiot);
      res.status(201).end();
    } else {
      res.status(422);
      next('Duplicate item!');
    }
  } catch (err) {
    next(err.message);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const item = await subjectCtrl.findSubjectById(req.params.id);
    if (item) {
      await subjectCtrl.updateSubject;
      res.send(item);
    } else {
      res.statusCode = 404;
      next({ error: 'item not found' });
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const item = await subjectCtrl.findSubjectById(req.params.id);
    if (item) {
      await subjectCtrl.deleteSubject(item, req.params.id);
      res.send();
    } else {
      next({ error: 'item not found' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
