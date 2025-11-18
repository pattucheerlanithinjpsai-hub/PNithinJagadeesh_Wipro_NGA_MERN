const express = require('express');
const app = express();
const PORT = 4000;

// Import courses routes
const courseRoutes = require('./routes/courses');

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to SkillSphere LMS API');
});

// Use courses routes
app.use('/courses', courseRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
