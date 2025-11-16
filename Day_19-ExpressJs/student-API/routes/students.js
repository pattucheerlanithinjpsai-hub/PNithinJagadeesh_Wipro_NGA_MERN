const express = require('express');
const router = express.Router();

// In-memory student array
let students = [
  { id: 1, name: "Alice", skills: ["JS", "React"], course: "Web Dev" },
  { id: 2, name: "Bob", skills: ["Python", "ML"], course: "Data Science" }
];

// US-01: GET all students
router.get('/', (req, res) => {
  res.json(students);
});

// US-02: GET student by ID
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// US-03: POST new student
router.post('/', (req, res) => {
  const { name, skills, course } = req.body;
  if (!name || !skills || !course) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    skills,
    course
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// US-04: PUT update student
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { name, skills, course } = req.body;
  if (name) student.name = name;
  if (skills) student.skills = skills;
  if (course) student.course = course;

  res.json(student);
});

// US-05: DELETE student
router.delete('/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Student not found" });

  const deletedStudent = students.splice(index, 1);
  res.json({ message: "Student deleted", student: deletedStudent[0] });
});

module.exports = router;
