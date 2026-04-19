require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./modules/auth/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// test route (important for debugging)
app.get('/', (req, res) => {
    res.send('API is working');
});

module.exports = app;