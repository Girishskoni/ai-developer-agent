const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   POST api/payment/process
// @desc    Process payment
// @access  Private
router.post('/process', authMiddleware, paymentController.processPayment);

module.exports = router;