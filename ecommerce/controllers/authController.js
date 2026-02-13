const User = require('../models/User');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const confirm = async (req, res) => {
  try {
    const { token } = req.params;
    // Confirm logic here
    res.status(200).json({ message: 'User confirmed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, confirm };