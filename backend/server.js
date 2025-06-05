const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const CAT_API = 'https://catfact.ninja/fact';

app.get('/cat-fact', async (req, res) => {
  try {
    const response = await axios.get(CAT_API);
    res.json({
      fact: response.data.fact,
      length: response.data.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cat fact' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));