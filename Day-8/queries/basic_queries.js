// basic_queries.js

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";  // or your Atlas URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("EnergyDB");
    const readings = db.collection("energy_readings");

    console.log("✅ Connected to MongoDB");

    // 1. Retrieve all readings for a specific meter
    const meterReadings = await readings.find({ meterId: "MTR001" }).toArray();
    console.log("🔹 Readings for MTR001:", meterReadings);

    // 2. Find readings between two timestamps
    const filtered = await readings.find({
      timestamp: {
        $gte: new Date("2025-10-29T10:00:00Z"),
        $lte: new Date("2025-10-29T12:00:00Z")
      }
    }).toArray();
    console.log("🔹 Readings between timestamps:", filtered);

  } finally {
    await client.close();
  }
}

run().catch(console.error);