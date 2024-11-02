const User = require('../models/User');
const { generateToken } = require('../config/auth');

const register = async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ username, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

module.exports = { register };
