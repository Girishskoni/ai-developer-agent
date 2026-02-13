const Ticket = require('../models/Ticket');

// @desc    Book movie ticket
// @route   POST /api/tickets/book
// @access  Private
exports.bookTicket = async (req, res) => {
  try {
    const { movieId, showTime, seats, totalPrice } = req.body;

    const ticket = new Ticket({
      user: req.user.id,
      movieId,
      showTime,
      seats,
      totalPrice
    });

    await ticket.save();
    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};