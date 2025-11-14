const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log(" Connected to MongoDB (Local)");
    return client.db("BookVerseDB");
  } catch (err) {
    console.error(" Database connection error:", err);
  }
}

module.exports = connectDB;
