const userModel = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const checkUser = await userModel.findOne({ email });
  if (checkUser) {
    return res
      .status(401)
      .json({ msg: "User already exist, please use another email" });
  }
  const hashPassword = await bcrypt.hash(password, 12);
  const registerUser = await userModel.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    // password: password,
    password: hashPassword,
  });
  res.status(201).json({
    registerUser,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const existUser = await userModel.findOne({ email });
  if (!existUser) {
    return res.status(404).json({
      msg: "User not found, please create account first",
    });
  }
  const isMatched = await bcrypt.compare(password, existUser.password);
  if (!isMatched) {
    return res.status(400).json({
      msg: "Invalid email or password",
    });
  }
  res.status(200).json({ msg: "User logged in successfully" });
};

module.exports = { register, login };
