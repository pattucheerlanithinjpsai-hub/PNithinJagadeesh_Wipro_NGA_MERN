const express = require('express');
const router = express.Router();

// Middleware to validate course ID
const validateCourseId = (req, res, next) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) { // Checks if ID contains only digits
    return res.status(400).json({ error: "Invalid course ID" });
  }
  next();
};

// Dynamic route for course details
router.get('/:id', validateCourseId, (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "React Mastery",
    duration: "6 weeks"
  });
});

module.exports = router;
