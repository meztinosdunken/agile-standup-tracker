const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Basic route for API
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to the Agile Standup Tracker API!' });
});

// New route for API version
app.get('/api/version', (req, res) => {
  res.send({ version: '1.0.0' });
});

// Health check route
app.get('/health', (req, res) => {
  res.send({ status: 'OK', timestamp: new Date() });
});

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).send({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});