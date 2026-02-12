const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { bookTicket } = require('../controllers/ticketController');

// @route   POST /api/tickets/book
// @desc    Book movie ticket
// @access  Private
router.post('/book', auth, bookTicket);

module.exports = router;