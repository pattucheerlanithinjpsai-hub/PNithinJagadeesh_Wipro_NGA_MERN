// server.js
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Use built-in JSON parser (no need for body-parser)
app.use(express.json());

// Mount routes
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
