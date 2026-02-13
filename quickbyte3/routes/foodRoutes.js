const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   GET api/food
// @desc    Get all food items
// @access  Public
router.get('/', foodController.getAllFoodItems);

// @route   POST api/food
// @desc    Add new food item
// @access  Private (Admin)
router.post('/', authMiddleware, foodController.addFoodItem);

module.exports = router;