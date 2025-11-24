// server.js
const express = require('express');
const compression = require('compression');
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');

const app = express();

// Middleware
app.use(compression());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to SkillSphere API!');
});

// Status route for deployment check
app.get('/status', (req, res) => {
  res.send('App is live');
});

// API Routes
app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter);

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for testing
