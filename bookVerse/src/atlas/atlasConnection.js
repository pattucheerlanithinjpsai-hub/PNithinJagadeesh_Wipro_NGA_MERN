const { MongoClient } = require("mongodb");

const atlasUrl = "mongodb+srv://<username>:<password>@cluster0.xyz.mongodb.net/";

async function connectAtlas() {
  try {
    const client = new MongoClient(atlasUrl);
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    return client.db("BookVerseCloudDB");
  } catch (err) {
    console.error("❌ Atlas connection error:", err);
  }
}

module.exports = connectAtlas;
