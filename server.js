const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');

connectDB(); // ✅ DB connected here

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/journal', require('./routes/journal'));
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.get('/', (req, res) => {
  res.send('Mental Wellness API is live');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});