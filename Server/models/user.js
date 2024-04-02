const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// const userModel = mongoose.model("userData",userSchema)

const userModel = mongoose.model("userdatas", userSchema);
module.exports = userModel;
