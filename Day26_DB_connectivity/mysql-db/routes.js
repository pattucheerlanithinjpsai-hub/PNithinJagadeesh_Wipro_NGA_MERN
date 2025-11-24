// routes.js
const express = require('express');
const router = express.Router();
const db = require('./db'); // Import DB once, not inside each route

// Simple test route
router.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Get all students
router.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            return res.status(500).send('Error fetching students');
        }
        res.json(results);
    });
});

// Add a new student
router.post('/students', (req, res) => {
    const newStudent = req.body;

    db.query('INSERT INTO students SET ?', newStudent, (err, results) => {
        if (err) {
            console.error('Error adding student:', err);
            return res.status(500).send('Error adding student');
        }
        res.status(201).send('Student added successfully');
    });
});

module.exports = router;
