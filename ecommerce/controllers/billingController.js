const Order = require('../models/Order');

const createBill = async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    const order = new Order({ userId, items, total });
    await order.save();
    res.status(201).json({ message: 'Bill created successfully', order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBill };