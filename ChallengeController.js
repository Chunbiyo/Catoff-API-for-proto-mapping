// controllers/challengeController.js
const Challenge = require('../models/Challenge');

exports.createChallenge = async (req, res) => {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res.status(201).json(challenge);
};

exports.getChallenges = async (req, res) => {
    const challenges = await Challenge.find();
    res.json(challenges);
};

exports.joinChallenge = async (req, res) => {
    const { id } = req.params;
    const challenge = await Challenge.findById(id);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    challenge.participants.push(req.user.id);
    await challenge.save();
    res.json({ message: 'Joined the challenge!' });
};
