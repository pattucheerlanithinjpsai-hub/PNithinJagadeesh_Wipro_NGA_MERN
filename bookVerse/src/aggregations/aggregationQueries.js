const connectDB = require("../config/db");

async function runAggregations() {
  const db = await connectDB();
  const Books = db.collection("Books");
  const Authors = db.collection("Authors");

  console.log("\n=== 📊 AGGREGATION PIPELINES START ===");

  // 1️⃣ Average rating per book
  const avgRating = await Books.aggregate([
    { $unwind: "$ratings" },
    {
      $group: {
        _id: "$_id",
        title: { $first: "$title" },
        avgRating: { $avg: "$ratings.score" },
      },
    },
  ]).toArray();
  console.log("\n1️⃣ Average Rating per Book:\n", avgRating);

  // 2️⃣ Top 3 rated books
  const topBooks = await Books.aggregate([
    { $unwind: "$ratings" },
    {
      $group: {
        _id: "$_id",
        title: { $first: "$title" },
        avgRating: { $avg: "$ratings.score" },
      },
    },
    { $sort: { avgRating: -1 } },
    { $limit: 3 },
  ]).toArray();
  console.log("\n2️⃣ Top 3 Books:\n", topBooks);

  // 3️⃣ Count books per genre
  const genreCount = await Books.aggregate([
    {
      $group: {
        _id: "$genre",
        totalBooks: { $sum: 1 },
      },
    },
  ]).toArray();
  console.log("\n3️⃣ Books per Genre:\n", genreCount);

  // 4️⃣ Authors with more than 2 books
  const prolificAuthors = await Books.aggregate([
    {
      $group: {
        _id: "$authorId",
        totalBooks: { $sum: 1 },
      },
    },
    { $match: { totalBooks: { $gt: 2 } } },
    {
      $lookup: {
        from: "Authors",
        localField: "_id",
        foreignField: "_id",
        as: "authorDetails",
      },
    },
  ]).toArray();
  console.log("\n4️⃣ Authors with >2 Books:\n", prolificAuthors);

  // 5️⃣ Total reward points per author
  const rewardPoints = await Books.aggregate([
    { $unwind: "$ratings" },
    {
      $group: {
        _id: "$authorId",
        totalScore: { $sum: "$ratings.score" },
      },
    },
    {
      $lookup: {
        from: "Authors",
        localField: "_id",
        foreignField: "_id",
        as: "authorDetails",
      },
    },
  ]).toArray();
  console.log("\n5️⃣ Total Reward Points:\n", rewardPoints);

  console.log("\n✅ AGGREGATIONS COMPLETED\n");
}

module.exports = runAggregations;
