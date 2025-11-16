let students = require('../data/students');
let idCounter = 1;

// US-01: Get all students
exports.getAllStudents = (req, res) => {
    res.json(students);
};

// US-02: Get student by ID
exports.getStudentById = (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

// US-03: Create student
exports.createStudent = (req, res) => {
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
};

// US-04: Update student
exports.updateStudent = (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, skills, course } = req.body;

    if (name) student.name = name;
    if (skills) student.skills = skills;
    if (course) student.course = course;

    res.json(student);
};

// US-05: Delete student
exports.deleteStudent = (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);

    res.json({ message: "Student deleted successfully" });
};
