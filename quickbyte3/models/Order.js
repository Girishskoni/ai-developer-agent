const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      foodItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodItem',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);