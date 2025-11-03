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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});