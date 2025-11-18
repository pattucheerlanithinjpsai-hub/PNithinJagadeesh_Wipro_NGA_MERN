import * as readline from "readline";
import CourseManager from "./courseManager";
import { CourseCategory } from "./models";

const manager = new CourseManager();

// Static setup: instructors
manager.addInstructor({ id: 1, name: "Alice", expertise: CourseCategory.Programming });
manager.addInstructor({ id: 2, name: "Bob", expertise: CourseCategory.Design });

// Static setup: students
manager.addStudent({ id: 101, name: "Charlie", email: "charlie@example.com" });
manager.addStudent({ id: 102, name: "Dana", email: "dana@example.com" });

// Static setup: courses
manager.createCourse("Intro to TypeScript", CourseCategory.Programming, 1);
manager.createCourse("UI/UX Basics", CourseCategory.Design, 2);

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