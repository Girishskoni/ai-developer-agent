const Order = require('../models/Order');

// Process payment
exports.processPayment = async (req, res) => {
  try {
    // In a real app, integrate with payment gateway like Stripe
    // This is a simplified version
    
    const { items, total, paymentMethod } = req.body;
    const userId = req.user.id;

    const newOrder = new Order({
      user: userId,
      items,
      total,
      paymentMethod,
      status: 'completed'
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};