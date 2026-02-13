const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const orderController = require('../controllers/orderController');

// @route   GET api/order
// @desc    Get user's orders
// @access  Private
router.get('/', authMiddleware, orderController.getOrders);

// @route   POST api/order
// @desc    Create new order
// @access  Private
router.post('/', authMiddleware, orderController.createOrder);

module.exports = router;