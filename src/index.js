const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Basic health
app.get('/api/health', (req, res) => res.json({ status: 'ok', ts: Date.now() }));

// Example simple routes - expand into /routes/*.js as needed
app.get('/api/challenges', (req, res) => {
  // placeholder - return empty list
  res.json([]);
});

app.post('/api/paste', (req, res) => {
  // placeholder - accept paste text
  const { text } = req.body;
  return res.json({ id: 'local-1', text: text || '' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend running on port ${port}`);
});
