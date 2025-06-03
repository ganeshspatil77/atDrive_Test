const express = require('express');
const https = require('https');
require('dotenv').config();

const router = express.Router();
const API_KEY = process.env.CURRENCY_API_KEY//'a594676412cd71e1d4301ec5';

router.get('/:base', (req, res) => {
  const base = req.params.base?.toUpperCase();

  if (!base || !API_KEY) {
    return res.status(400).json({ message: 'Base currency or API key missing' });
  }

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;

  https.get(url, (apiRes) => {
    let data = '';

    apiRes.on('data', (chunk) => {
      data += chunk;
    });

    apiRes.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        if (parsed.result !== 'success') {
          return res.status(400).json({ message: 'Invalid response', error: parsed });
        }
        res.json(parsed);
      } catch (err) {
        res.status(500).json({ message: 'Error parsing response', error: err.message });
      }
    });
  }).on('error', (err) => {
    res.status(500).json({ message: 'Request failed', error: err.message });
  });
});

module.exports = router;
