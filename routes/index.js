const path = require('path');
const router = require('express').Router();
const catalogRoute = require('./catalog');
const homeRoute = require('./home');
const usersRoute = require('./users');

router.use('/api/catalog', catalogRoute);
router.use('/api', homeRoute);
router.use('/api/users', usersRoute);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
