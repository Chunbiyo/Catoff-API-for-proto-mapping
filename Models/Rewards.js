const mongoose = require('mongoose');

const rewardsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, required: true },
});

const Rewards = mongoose.model('Rewards', rewardsSchema);
module.exports = Rewards;
