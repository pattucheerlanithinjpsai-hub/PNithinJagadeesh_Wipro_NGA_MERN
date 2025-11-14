import { MongoClient } from "mongodb";
interface Author {
  _id: number;
  name: string;
  birthYear: number;
  nationality: string;
}

interface User {
  _id: number;
  name: string;
  email: string;
  joinDate: Date;
}

interface Book {
  _id: number;
  title: string;
  genre: string;
  publicationYear: number;
  authorId: number;
  ratings: { user: string; score: number; comment: string }[];
}

const url = "mongodb://localhost:27017";   // or your Atlas URL
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("BookVerseDB");

    const Authors = db.collection<Author>("Authors");
    const Books = db.collection<Book>("Books");
    const Users = db.collection<User>("Users");
    // ----------------------------
    // ✅ User Story 1: Insert Sample Data
    // ----------------------------

    await Authors.insertMany([
      { _id: 1, name: "J.K. Rowling", birthYear: 1965, nationality: "British" },
      { _id: 2, name: "Isaac Asimov", birthYear: 1920, nationality: "American" },
      { _id: 3, name: "George R.R. Martin", birthYear: 1948, nationality: "American" }

    ]);

    await Users.insertMany([
      { _id: 1, name: "Alice", email: "alice@gmail.com", joinDate: new Date("2024-08-10") },
      { _id: 2, name: "Bob", email: "bob@yahoo.com", joinDate: new Date("2025-01-01") },
      { _id: 3, name: "Charlie", email: "charlie@outlook.com", joinDate: new Date("2025-02-15") }
    ]);

    await Books.insertMany([
      {
        _id: 101,
        title: "Harry Potter",
        genre: "Fantasy",
        publicationYear: 1997,
        authorId: 1,
        ratings: []
      },
      {
        _id: 102,
        title: "Foundation",
        genre: "Science Fiction",
        publicationYear: 1951,
        authorId: 2,
        ratings: []
      },
      {
        _id: 103,
        title: "I, Robot",
        genre: "Science Fiction",
        publicationYear: 1950,
        authorId: 2,
        ratings: []
      },
      {
        _id: 104,
        title: "Game of Thrones",
        genre: "Fantasy",
        publicationYear: 1996,
        authorId: 3,
        ratings: []
      },
      {
        _id: 105,
        title: "Modern AI",
        genre: "Technology",
        publicationYear: 2020,
        authorId: 2,
        ratings: []
      }
    ]);

    // ----------------------------
    // ✅ User Story 2: CRUD Operations
    // ----------------------------

    console.log("✅ Inserting new user...");
    await Users.insertOne({
      _id: 4,
      name: "David",
      email: "david@gmail.com",
      joinDate: new Date()
    });

    console.log("✅ Inserting new book...");
    await Books.insertOne({
      _id: 106,
      title: "Robots & Empire",
      genre: "Science Fiction",
      publicationYear: 1985,
      authorId: 2,
      ratings: []
    });

    console.log("✅ Getting all Science Fiction books...");
    const sciFiBooks = await Books.find({ genre: "Science Fiction" }).toArray();
    console.log(sciFiBooks);

    console.log("✅ Updating publication year...");
    await Books.updateOne({ _id: 101 }, { $set: { publicationYear: 1998 } });

    console.log("✅ Deleting user...");
    await Users.deleteOne({ _id: 3 });

    console.log("✅ Adding rating to Harry Potter...");
    await Books.updateOne(
      { _id: 101 },
      {
        $push: {
          ratings: {
            user: "Alice",
            score: 5,
            comment: "Amazing book!"
          }
        }
      }
    );

    // ----------------------------
    // ✅ User Story 3: Querying
    // ----------------------------

    console.log("✅ Books published after 2015:");
    console.log(await Books.find({ publicationYear: { $gt: 2015 } }).toArray());

    console.log("✅ Authors who wrote Fantasy:");
    console.log(
      await Books.aggregate([
        { $match: { genre: "Fantasy" } },
        {
          $lookup: {
            from: "Authors",
            localField: "authorId",
            foreignField: "_id",
            as: "authorDetails"
          }
        },
        { $unwind: "$authorDetails" },
        { $project: { authorDetails: 1, _id: 0 } }
      ]).toArray()
    );

    console.log("✅ Users joined in last 6 months:");
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    console.log(
      await Users.find({ joinDate: { $gte: sixMonthsAgo } }).toArray()
    );

    console.log("✅ Books with average rating > 4:");
    console.log(
      await Books.aggregate([
        { $unwind: "$ratings" },
        {
          $group: {
            _id: "$title",
            avgRating: { $avg: "$ratings.score" }
          }
        },
        { $match: { avgRating: { $gt: 4 } } }
      ]).toArray()
    );

    // ----------------------------
    // ✅ Bonus
    // ----------------------------

    console.log("✅ Top 3 most-rated books:");
    console.log(
      await Books.aggregate([
        { $project: { title: 1, ratingCount: { $size: "$ratings" } } },
        { $sort: { ratingCount: -1 } },
        { $limit: 3 }
      ]).toArray()
    );

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("✅ MongoDB connection closed.");
  }
}

run();