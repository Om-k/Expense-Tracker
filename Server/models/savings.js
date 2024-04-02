const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema({
  userEmail: String,
  name: String,
  date: String,
  value: Number,
});

const Savings = mongoose.model("savings", savingsSchema);

module.exports = Savings;
