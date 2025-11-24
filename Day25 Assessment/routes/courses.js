const express = require('express');
const router = express.Router();

// Dummy courses data
let courses = [
  { id: 1, name: 'JavaScript Basics', duration: '4 weeks' },
  { id: 2, name: 'Node.js Fundamentals', duration: '6 weeks' },
  { id: 3, name: 'Express.js Advanced', duration: '5 weeks' }
];

// GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// GET single course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
});

// POST new course
router.post('/', (req, res) => {
  const { name, duration } = req.body;
  const newCourse = { id: courses.length + 1, name, duration };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// PUT update course by ID
router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  const { name, duration } = req.body;
  course.name = name || course.name;
  course.duration = duration || course.duration;
  res.json(course);
});

// DELETE course by ID
router.delete('/:id', (req, res) => {
  const index = courses.findIndex(c => c.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Course not found' });
  const deletedCourse = courses.splice(index, 1);
  res.json(deletedCourse[0]);
});

module.exports = router;
