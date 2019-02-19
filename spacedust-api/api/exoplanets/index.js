const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/').get(controller.getExoplanets);
router.route('/:id').get(controller.getExoplanet);

module.exports = router;