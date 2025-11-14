const connectDB = require("../config/db");

async function createIndexes() {
  const db = await connectDB();
  const Books = db.collection("Books");

  
  console.log("Creating indexes...");
  await Books.createIndex({ genre: 1 });
  await Books.createIndex({ authorId: 1 });
  await Books.createIndex({ "ratings.score": 1 });

  console.log(" Indexes created.");

  
  const query = { genre: "Fantasy" };

  console.log("\n BEFORE INDEX:");
  const before = await Books.find(query).explain("executionStats");
  console.log("Execution Time:", before.executionStats.executionTimeMillis, "ms");

  console.log("\n AFTER INDEX:");
  const after = await Books.find(query).explain("executionStats");
  console.log("Execution Time:", after.executionStats.executionTimeMillis, "ms");

 
  try {
    await Books.dropIndex("authorId_1");
    console.log("\n Dropped unnecessary index: authorId");
  } catch {
    console.log("ℹ Index already removed previously.");
  }
}

module.exports = createIndexes;
