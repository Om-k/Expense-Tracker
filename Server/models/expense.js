const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userEmail: String,
  name: String,
  date: String,
  value: Number,
  summary: String,
});

const Expense = mongoose.model("expense", expenseSchema);

module.exports = Expense;
