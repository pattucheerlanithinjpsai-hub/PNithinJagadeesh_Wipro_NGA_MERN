const express = require('express');
const app = express();
app.use(express.json());

// Temporary in-memory database
let students = [];
let idCounter = 1;

// ======================
// ROUTES
// ======================

// US-01: Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// US-02: Get one student
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
});

// US-03: Create student
app.post('/students', (req, res) => {
    const { name, skills, course } = req.body;

    if (!name || !skills || !course) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const newStudent = {
        id: idCounter++,
        name,
        skills,
        course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// US-04: Update student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const { name, skills, course } = req.body;

    if (name) student.name = name;
    if (skills) student.skills = skills;
    if (course) student.course = course;

    res.json(student);
});

// US-05: Delete student
app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "Student not found" });

    students.splice(index, 1);
    res.json({ message: "Student deleted successfully" });
});

// ======================
app.listen(3000, () => {
    console.log("SERVER RUNNING ON PORT 3000");
});
