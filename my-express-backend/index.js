const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const accessToken = require('./mpesa/access_token');
const stkPush = require('./mpesa/stk_push');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static React files
app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.get('/access-token', async (req, res) => {
  try {
    const token = await accessToken();
    res.json({ access_token: token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch access token' });
  }
});

app.post('/stk-push', async (req, res) => {
  try {
    const response = await stkPush(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'STK Push failed' });
  }
});

// Catch-all handler to serve React's index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
