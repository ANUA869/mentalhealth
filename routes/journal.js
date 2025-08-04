const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Journal = require('../models/Journal');

router.post('/', auth, async (req, res) => {
    try {
        const newEntry = new Journal({
            user: req.user.id,
            entry: req.body.entry
        });
        await newEntry.save();
        res.json(newEntry);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const entries = await Journal.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(entries);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;