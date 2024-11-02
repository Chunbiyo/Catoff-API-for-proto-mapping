// models/Mapping.js
const mongoose = require('mongoose');

const MappingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
    coordinates: { type: String, required: true },
    metadata: Object,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mapping', MappingSchema);
