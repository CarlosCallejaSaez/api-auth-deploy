const express = require('express');
const mobilesRouter = require('./mobiles.js');
const manufacturersRouter = require('./manufacturers.js');
const smartwatchesRouter = require('./smartwatches.js');
const usersRouter = require('./users.js');


const router = express.Router();

router.use('/mobiles', mobilesRouter);
router.use('/manufacturers', manufacturersRouter);
router.use('/smartwatches', smartwatchesRouter);
router.use('/users', usersRouter);

module.exports = router;