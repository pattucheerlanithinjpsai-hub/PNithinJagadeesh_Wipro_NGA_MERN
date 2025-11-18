// index_optimization.js

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";  // or Atlas URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("EnergyDB");
    const readings = db.collection("energy_readings");

    console.log("✅ Connected to MongoDB");

    // 1. Index on timestamp
    await readings.createIndex({ timestamp: 1 });
    console.log("✅ Created Index: timestamp");

    // 2. Compound index on meterId + timestamp
    await readings.createIndex({ meterId: 1, timestamp: -1 });
    console.log("✅ Created Compound Index: meterId + timestamp");

  } finally {
    await client.close();
  }
}

run().catch(console.error);