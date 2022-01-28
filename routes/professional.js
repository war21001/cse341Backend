const express = require('express');

const professionalController = require('../controller/professional');

const router = express.Router();

router.get('/', professionalController.getdata);

module.exports = router;

