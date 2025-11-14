// aggregations.js

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";  // or Atlas URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("EnergyDB");
    const readings = db.collection("energy_readings");

    console.log("✅ Connected to MongoDB");

    // 1. Total energy consumption per meter
    const totalEnergy = await readings.aggregate([
      { $group: { _id: "$meterId", totalEnergy: { $sum: "$energy_kWh" } } }
    ]).toArray();
    console.log("🔹 Total Energy per Meter:", totalEnergy);

    // 2. Average temperature by location
    const avgTemp = await readings.aggregate([
      { $group: { _id: "$location", avgTemperature: { $avg: "$temperature_C" } } }
    ]).toArray();
    console.log("🔹 Avg Temperature by Location:", avgTemp);

    // 3. Hourly energy consumption trend
    const hourlyTrend = await readings.aggregate([
      {
        $group: {
          _id: {
            meterId: "$meterId",
            hour: { $hour: "$timestamp" }
          },
          totalEnergy: { $sum: "$energy_kWh" }
        }
      },
      { $sort: { "_id.hour": 1 } }
    ]).toArray();
    console.log("🔹 Hourly Energy Trend:", hourlyTrend);

    // 4. Compare average energy usage across meters
    const comparison = await readings.aggregate([
      { $group: { _id: "$meterId", avgEnergy: { $avg: "$energy_kWh" } } }
    ]).toArray();
    console.log("🔹 Average Energy Usage Comparison:", comparison);

    // 5. High usage hours (> 6 kWh)
    const highUsage = await readings.find({ energy_kWh: { $gt: 6 } }).toArray();
    console.log("🔹 High Usage Hours:", highUsage);

  } finally {
    await client.close();
  }
}

run().catch(console.error);