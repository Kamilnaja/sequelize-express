const express = require('express');
const Przedmiot = require('../db/models/subjects.model');
const router = express.Router();

router.use('/', async (req, res, next) => {
  try {
    res.json(await Przedmiot.findAll());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
