const express = require('express');
const router = express.Router();
const addController = require('../controllers/add');

router.get('/', addController);

module.exports = router;