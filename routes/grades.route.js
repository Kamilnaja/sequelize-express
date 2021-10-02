const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
  res.send('Joł skurwysyny joł głupie chuje');
});

module.exports = router;
