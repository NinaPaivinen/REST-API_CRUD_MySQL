const express = require('express')
const router = express.Router()
const koiratController = require('../controllers/koirat.controller');

// näytä kaikki koirat
router.get('/', koiratController.findAll);

// luo uusi koirat POST METHOD
router.post('/', koiratController.create);

// näytä koira by id GET METHOD
router.get('/:id', koiratController.findById);

// päivitä koira by id PUT METHOD
router.put('/:id', koiratController.update);

// poista koira by id DELTE METHOD
router.delete('/:id', koiratController.delete);

module.exports = router