const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please fill this field"],
    minLength: [3, "Your first name should have at least 3 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please fill this field"],
    minLength: [3, "Your last name should have at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please fill this field"],
  },
  password: {
    type: String,
    required: [true, "Please fill this field"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
