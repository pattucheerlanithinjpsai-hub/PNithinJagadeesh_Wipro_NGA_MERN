// here we will be connecting to MongoDB Atlas using TypeScript following the official MongoDB Node.js driver documentation via following steps 

// Step 1: Install the MongoDB Node.js driver

// Run the following command to install the MongoDB Node.js driver using npm

import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";  // ✅ MongoDB Compass local connection

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Connected to MongoDB Compass");

    const db = client.db("demoDB");
    const collection = db.collection("demoCollection");

    const doc = { name: "John Doe", age: 30, occupation: "Developer" };
    const result = await collection.insertOne(doc);

    console.log("✅ Document inserted with _id:", result.insertedId);

    await client.close();
    console.log("✅ Connection closed");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

run(); //running the async function and catching any unhandled errors

// This TypeScript code connects to a MongoDB Atlas database, inserts a document into a specified collection, and then closes the connection.   

// Make sure to replace the placeholder values in the connection string with your actual MongoDB Atlas credentials before running the code.












