// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like form.html) from current directory
app.use(express.static(__dirname));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Mongoose schema and model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Form = mongoose.model('Form', formSchema);

// GET endpoint to check server status
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running' });
});

// POST endpoint to handle form submission
app.post('/api/submit-form',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    const newForm = new Form({ name, email, message });

    try {
      await newForm.save();
      res.json({ message: 'Form submitted successfully', data: { name, email, message } });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
