const FoodItem = require('../models/FoodItem');

// Get all food items
exports.getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add new food item
exports.addFoodItem = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const newFoodItem = new FoodItem({
      name,
      description,
      price,
      category,
      image
    });

    const foodItem = await newFoodItem.save();
    res.json(foodItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};