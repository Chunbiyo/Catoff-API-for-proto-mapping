// controllers/mappingController.js
const Mapping = require('../models/Mapping');
const Challenge = require('../models/Challenge');
const Reward = require('../models/Reward');

exports.submitMapping = async (req, res) => {
    const mapping = new Mapping({
        user: req.user.id,
        challenge: req.body.challenge,
        coordinates: req.body.coordinates,
        metadata: req.body.metadata
    });
    await mapping.save();

    // Allocate points
    const points = calculatePoints(req.body.difficulty, req.body.timeSpent);
    const reward = new Reward({ user: req.user.id, challenge: req.body.challenge, points });
    await reward.save();

    res.status(201).json({ message: 'Mapping submitted!', points });
};
