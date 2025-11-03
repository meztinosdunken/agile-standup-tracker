const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Basic route for API
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to the Agile Standup Tracker API!' });
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