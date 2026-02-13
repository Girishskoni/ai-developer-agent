const Food = require('../models/Food');

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createFood = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const food = new Food({ name, price, description });
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllFoods,
  createFood
};