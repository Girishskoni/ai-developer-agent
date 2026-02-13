const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const foodController = require('../controllers/foodController');

// @route   GET api/food
// @desc    Get all food items
// @access  Public
router.get('/', foodController.getAllFoodItems);

// @route   GET api/food/:id
// @desc    Get food item by ID
// @access  Public
router.get('/:id', foodController.getFoodItemById);

// @route   POST api/food
// @desc    Add new food item
// @access  Private (Admin)
router.post('/', authMiddleware, foodController.addFoodItem);

module.exports = router;