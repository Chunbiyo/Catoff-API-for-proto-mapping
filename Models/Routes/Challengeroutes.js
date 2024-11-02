const express = require('express');
const { createChallenge, getChallenges } = require('../controllers/challengeController');

const router = express.Router();

router.post('/', createChallenge);
router.get('/', getChallenges);

module.exports = router;
