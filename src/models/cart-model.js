const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cartSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cart", cartSchema);
