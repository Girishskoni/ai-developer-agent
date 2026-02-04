const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const paymentController = require('../controllers/paymentController');

router.use(authMiddleware);

router.post('/create-payment-intent', paymentController.createPaymentIntent);

module.exports = router;