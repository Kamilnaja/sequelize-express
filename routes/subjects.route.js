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
  const body = req.body;
  try {
    const item = await subjectCtrl.findSubjectById(req.params.id);
    if (item) {
      res.send(item);
    } else {
      next({
        errors: 'Niepoważne podejście do problemu',
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
