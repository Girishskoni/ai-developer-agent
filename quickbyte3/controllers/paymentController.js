const Payment = require('../models/Payment');

const processPayment = async (req, res) => {
  try {
    const { amount, paymentMethod, orderId } = req.body;
    const payment = new Payment({ amount, paymentMethod, orderId });
    await payment.save();
    res.status(201).json({ message: 'Payment processed successfully', payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  processPayment
};