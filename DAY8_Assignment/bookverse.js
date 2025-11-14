"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var url = "mongodb://localhost:27017"; // or your Atlas URL
var client = new mongodb_1.MongoClient(url);
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var db, Authors, Books, Users, sciFiBooks, _a, _b, _c, _d, sixMonthsAgo, _e, _f, _g, _h, _j, _k, error_1;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    _l.trys.push([0, 16, 17, 19]);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _l.sent();
                    console.log("Connected to MongoDB");
                    db = client.db("BookVerseDB");
                    Authors = db.collection("Authors");
                    Books = db.collection("Books");
                    Users = db.collection("Users");
                    // ----------------------------
                    // ✅ User Story 1: Insert Sample Data
                    // ----------------------------
                    return [4 /*yield*/, Authors.insertMany([
                            { _id: 1, name: "J.K. Rowling", birthYear: 1965, nationality: "British" },
                            { _id: 2, name: "Isaac Asimov", birthYear: 1920, nationality: "American" },
                            { _id: 3, name: "George R.R. Martin", birthYear: 1948, nationality: "American" }
                        ])];
                case 2:
                    // ----------------------------
                    // ✅ User Story 1: Insert Sample Data
                    // ----------------------------
                    _l.sent();
                    return [4 /*yield*/, Users.insertMany([
                            { _id: 1, name: "Alice", email: "alice@gmail.com", joinDate: new Date("2024-08-10") },
                            { _id: 2, name: "Bob", email: "bob@yahoo.com", joinDate: new Date("2025-01-01") },
                            { _id: 3, name: "Charlie", email: "charlie@outlook.com", joinDate: new Date("2025-02-15") }
                        ])];
                case 3:
                    _l.sent();
                    return [4 /*yield*/, Books.insertMany([
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
                        ])];
                case 4:
                    _l.sent();
                    // ----------------------------
                    // ✅ User Story 2: CRUD Operations
                    // ----------------------------
                    console.log("✅ Inserting new user...");
                    return [4 /*yield*/, Users.insertOne({
                            _id: 4,
                            name: "David",
                            email: "david@gmail.com",
                            joinDate: new Date()
                        })];
                case 5:
                    _l.sent();
                    console.log("✅ Inserting new book...");
                    return [4 /*yield*/, Books.insertOne({
                            _id: 106,
                            title: "Robots & Empire",
                            genre: "Science Fiction",
                            publicationYear: 1985,
                            authorId: 2,
                            ratings: []
                        })];
                case 6:
                    _l.sent();
                    console.log("✅ Getting all Science Fiction books...");
                    return [4 /*yield*/, Books.find({ genre: "Science Fiction" }).toArray()];
                case 7:
                    sciFiBooks = _l.sent();
                    console.log(sciFiBooks);
                    console.log("✅ Updating publication year...");
                    return [4 /*yield*/, Books.updateOne({ _id: 101 }, { $set: { publicationYear: 1998 } })];
                case 8:
                    _l.sent();
                    console.log("✅ Deleting user...");
                    return [4 /*yield*/, Users.deleteOne({ _id: 3 })];
                case 9:
                    _l.sent();
                    console.log("✅ Adding rating to Harry Potter...");
                    return [4 /*yield*/, Books.updateOne({ _id: 101 }, {
                            $push: {
                                ratings: {
                                    user: "Alice",
                                    score: 5,
                                    comment: "Amazing book!"
                                }
                            }
                        })];
                case 10:
                    _l.sent();
                    // ----------------------------
                    // ✅ User Story 3: Querying
                    // ----------------------------
                    console.log("✅ Books published after 2015:");
                    _b = (_a = console).log;
                    return [4 /*yield*/, Books.find({ publicationYear: { $gt: 2015 } }).toArray()];
                case 11:
                    _b.apply(_a, [_l.sent()]);
                    console.log("✅ Authors who wrote Fantasy:");
                    _d = (_c = console).log;
                    return [4 /*yield*/, Books.aggregate([
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
                        ]).toArray()];
                case 12:
                    _d.apply(_c, [_l.sent()]);
                    console.log("✅ Users joined in last 6 months:");
                    sixMonthsAgo = new Date();
                    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
                    _f = (_e = console).log;
                    return [4 /*yield*/, Users.find({ joinDate: { $gte: sixMonthsAgo } }).toArray()];
                case 13:
                    _f.apply(_e, [_l.sent()]);
                    console.log("✅ Books with average rating > 4:");
                    _h = (_g = console).log;
                    return [4 /*yield*/, Books.aggregate([
                            { $unwind: "$ratings" },
                            {
                                $group: {
                                    _id: "$title",
                                    avgRating: { $avg: "$ratings.score" }
                                }
                            },
                            { $match: { avgRating: { $gt: 4 } } }
                        ]).toArray()];
                case 14:
                    _h.apply(_g, [_l.sent()]);
                    // ----------------------------
                    // ✅ Bonus
                    // ----------------------------
                    console.log("✅ Top 3 most-rated books:");
                    _k = (_j = console).log;
                    return [4 /*yield*/, Books.aggregate([
                            { $project: { title: 1, ratingCount: { $size: "$ratings" } } },
                            { $sort: { ratingCount: -1 } },
                            { $limit: 3 }
                        ]).toArray()];
                case 15:
                    _k.apply(_j, [_l.sent()]);
                    return [3 /*break*/, 19];
                case 16:
                    error_1 = _l.sent();
                    console.error(" Error:", error_1);
                    return [3 /*break*/, 19];
                case 17: return [4 /*yield*/, client.close()];
                case 18:
                    _l.sent();
                    console.log(" MongoDB connection closed.");
                    return [7 /*endfinally*/];
                case 19: return [2 /*return*/];
            }
        });
    });
}
run();
