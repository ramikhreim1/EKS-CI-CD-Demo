const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: '42' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

module.exports = app;
