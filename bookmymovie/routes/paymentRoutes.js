const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { processPayment } = require('../controllers/paymentController');

// @route   POST /api/payments/process
// @desc    Process payment
// @access  Private
router.post('/process', auth, processPayment);

module.exports = router;