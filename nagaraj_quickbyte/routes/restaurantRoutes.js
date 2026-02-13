const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const restaurantController = require('../controllers/restaurantController');

// @route   GET api/restaurant
// @desc    Get all restaurants
// @access  Public
router.get('/', restaurantController.getAllRestaurants);

// @route   GET api/restaurant/:id
// @desc    Get restaurant by ID
// @access  Public
router.get('/:id', restaurantController.getRestaurantById);

// @route   POST api/restaurant
// @desc    Add new restaurant
// @access  Private (Admin)
router.post('/', authMiddleware, restaurantController.addRestaurant);

module.exports = router;