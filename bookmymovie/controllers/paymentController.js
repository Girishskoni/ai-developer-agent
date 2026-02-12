const Payment = require('../models/Payment');
const Ticket = require('../models/Ticket');

// @desc    Process payment
// @route   POST /api/payments/process
// @access  Private
exports.processPayment = async (req, res) => {
  try {
    const { ticketId, amount, paymentMethod } = req.body;

    // Verify ticket exists
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ msg: 'Ticket not found' });
    }

    // Create payment
    const payment = new Payment({
      user: req.user.id,
      ticket: ticketId,
      amount,
      paymentMethod
    });

    await payment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};