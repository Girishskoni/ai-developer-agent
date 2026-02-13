const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const paymentController = require('../controllers/paymentController');

// @route   POST api/payment/checkout
// @desc    Process payment
// @access  Private
router.post('/checkout', authMiddleware, paymentController.processPayment);

// @route   GET api/payment/history
// @desc    Get payment history
// @access  Private
router.get('/history', authMiddleware, paymentController.getPaymentHistory);

module.exports = router;