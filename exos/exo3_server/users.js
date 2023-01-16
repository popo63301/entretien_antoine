const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

module.exports = userSchema;
