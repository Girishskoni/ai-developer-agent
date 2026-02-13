const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const paymentController = require('../controllers/paymentController');

// @route   POST api/payment
// @desc    Process payment
// @access  Private
router.post('/', authMiddleware, paymentController.processPayment);

module.exports = router;