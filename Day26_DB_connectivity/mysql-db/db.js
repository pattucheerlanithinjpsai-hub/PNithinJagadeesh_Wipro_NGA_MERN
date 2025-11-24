// db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Students_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:", err.message);
  } else {
    console.log("Connected to MySQL Database.Successfully!");
  }
});

module.exports = db;
