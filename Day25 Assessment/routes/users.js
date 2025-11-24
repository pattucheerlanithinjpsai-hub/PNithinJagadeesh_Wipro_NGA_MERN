const express = require('express');
const router = express.Router();

// Dummy users data
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET single user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user by ID
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  res.json(user);
});

// DELETE user by ID
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
});

module.exports = router;
