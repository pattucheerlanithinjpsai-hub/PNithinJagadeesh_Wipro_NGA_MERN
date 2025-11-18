"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const courseManager_1 = __importDefault(require("./courseManager"));
const models_1 = require("./models");
const manager = new courseManager_1.default();
// Static setup: instructors
manager.addInstructor({ id: 1, name: "Alice", expertise: models_1.CourseCategory.Programming });
manager.addInstructor({ id: 2, name: "Bob", expertise: models_1.CourseCategory.Design });
// Static setup: students
manager.addStudent({ id: 101, name: "Charlie", email: "charlie@example.com" });
manager.addStudent({ id: 102, name: "Dana", email: "dana@example.com" });
// Static setup: courses
manager.createCourse("Intro to TypeScript", models_1.CourseCategory.Programming, 1);
manager.createCourse("UI/UX Basics", models_1.CourseCategory.Design, 2);
// Static setup: enrollments
manager.enrollStudent(1, 101);
manager.enrollStudent(2, 102);
// Display current data
console.log("\n📘 Courses:");
manager.listCourses();
console.log("\n👥 Students:");
manager.listStudents();
// Interactive CLI: add a new student
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("\n➕ Add a new student (format: Name,Email): ", (input) => {
    const [name, email] = input.split(",");
    const id = Math.floor(Math.random() * 1000) + 200; // avoid ID collision
    manager.addStudent({ id, name: name.trim(), email: email.trim() });
    console.log("\n✅ Updated Student List:");
    manager.listStudents();
    rl.close();
});
