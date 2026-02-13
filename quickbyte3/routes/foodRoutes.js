const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Get all foods
router.get('/', foodController.getAllFoods);

// Create a new food
router.post('/', foodController.createFood);

module.exports = router;