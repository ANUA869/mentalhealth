const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    entry: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Journal', JournalSchema);