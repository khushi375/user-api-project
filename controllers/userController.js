const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "User deleted" });
};

exports.uploadProfile = (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
};