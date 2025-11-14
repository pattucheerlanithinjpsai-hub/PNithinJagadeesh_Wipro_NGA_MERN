const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432,
});

app.use(bodyParser.json());

app.get('/api/customers', async (req, res) => {
  try {
    const { name, location, sortBy } = req.query;
    let query = 'SELECT * FROM customers';
    const queryParams = [];
    const conditions = [];

    if (name) {
      queryParams.push(`%${name}%`);
      conditions.push(`customer_name ILIKE $${queryParams.length}`);
    }

    if (location) {
      queryParams.push(`%${location}%`);
      conditions.push(`location ILIKE $${queryParams.length}`);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    const validSortFields = ['created_at', 'customer_name', 'location'];
    if (sortBy && validSortFields.includes(sortBy)) {
      query += ` ORDER BY ${sortBy}`;
    }

    const result = await pool.query(query, queryParams);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
