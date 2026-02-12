const express = require('express');
const router = express.Router();
const { register, confirm } = require('../controllers/authController');

router.post('/register', register);
router.get('/confirm/:token', confirm);

module.exports = router;