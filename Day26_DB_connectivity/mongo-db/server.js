const express = require('express');
const db = require('./db'); // MongoDB connection
const studentRoutes = require('./routes/studentRoutes'); // path must be correct

const app = express();
const PORT = 3001;

app.use(express.json());

// Base route
app.get('/', (req, res) => res.send('MongoDB API is running'));

// Mount student routes
app.use('/api/students', studentRoutes); // ✅ this must match Postman URL

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
