'use strict';

const express = require('express');

let router = express.Router();

router.use('/albums', require('./albums'))
router.use('/images', require('./images'))



module.exports = router;
