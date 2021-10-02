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
  // todo - handle duplication
  try {
    await subjectCtrl.createSubject(body);
    res.status(201).end();
  } catch (err) {
    next(err);
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
      res.send({ error: 'item not found' });
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
      res.statusCode = 404;
      res.send({ error: 'item not found' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
