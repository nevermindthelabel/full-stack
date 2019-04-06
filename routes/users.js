const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('you must be a user');
});

router.get('/cool', (req, res, next) => {
  res.send('you are so cool');
});

module.exports = router;
