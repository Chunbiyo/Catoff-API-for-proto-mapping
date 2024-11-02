const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  rewardStructure: { type: String, required: true },
});

const Challenge = mongoose.model('Challenge', challengeSchema);
module.exports = Challenge;
