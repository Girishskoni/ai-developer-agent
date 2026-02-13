const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');

// @route   GET api/cart
// @desc    Get user's cart
// @access  Private
router.get('/', authMiddleware, cartController.getCart);

// @route   POST api/cart
// @desc    Add item to cart
// @access  Private
router.post('/', authMiddleware, cartController.addToCart);

// @route   DELETE api/cart/:id
// @desc    Remove item from cart
// @access  Private
router.delete('/:id', authMiddleware, cartController.removeFromCart);

module.exports = router;