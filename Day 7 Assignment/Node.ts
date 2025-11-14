const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("RetailDB");

    // Insert sample product
    await db.collection("products").insertOne({
      name: "Samsung Galaxy S23",
      category: "Mobiles",
      price: 55000,
      stock: 120
    });

    // Insert sample user
    await db.collection("users").insertOne({
      username: "john123",
      email: "john@example.com",
      password: "hashedpassword"
    });

    // Insert sample order
    await db.collection("orders").insertOne({
      userId: "u101",
      orderDate: new Date(),
      products: [
        { productId: "p101", qty: 1, price: 55000 }
      ],
      totalCost: 55000
    });

    console.log("✅ Sample data inserted");
  } finally {
    await client.close();
  }
}

run();