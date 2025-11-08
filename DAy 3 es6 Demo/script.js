document.getElementById("runDemo").addEventListener("click", () => {
  let output = document.getElementById("output");
  output.innerHTML = ""; // clear previous output

  // --------------------------
  // Use of let and const
  // --------------------------
  const instituteName = "Spring Flowers Institute";
  let courseName = "Full Stack Web Development";

  output.innerHTML += `<div class="section"><h3>Institute & Course Info</h3>
  <p><strong>Institute:</strong> ${instituteName}</p>
  <p><strong>Course:</strong> ${courseName}</p></div>`;

  // --------------------------
  // Spread Operator (...)
  // --------------------------
  const coreSubjects = ["HTML", "CSS", "JavaScript"];
  const advancedSubjects = ["React", "Node.js", "MongoDB"];
  const allSubjects = [...coreSubjects, ...advancedSubjects];

  output.innerHTML += `<div class="section"><h3>All Subjects (Spread Operator)</h3>
  <p>${allSubjects.join(", ")}</p></div>`;

  // --------------------------
  //  Arrow Function
  // --------------------------
  const greet = (name) => `Welcome to the course, ${name}!`;

  output.innerHTML += `<div class="section"><h3>Greeting Message (Arrow Function)</h3>
  <p>${greet("Nithin")}</p></div>`;

  // --------------------------
  // Class and Objects
  // --------------------------
  class Student {
    constructor(name, age, skills) {
      this.name = name;
      this.age = age;
      this.skills = skills;
    }

    display() {
      return `<strong>Name:</strong> ${this.name}<br>
              <strong>Age:</strong> ${this.age}<br>
              <strong>Skills:</strong> ${this.skills.join(", ")}`;
    }
  }

  const student1 = new Student("Alice", 20, ["HTML", "CSS", "JS"]);
  const student2 = new Student("Bob", 22, ["React", "Node.js", "JS"]);

  output.innerHTML += `<div class="section"><h3>Student Details (Class)</h3>
  <p>${student1.display()}</p><hr>
  <p>${student2.display()}</p></div>`;

  // --------------------------
  // Map Object
  // --------------------------
  const studentGrades = new Map();
  studentGrades.set("Alice", "A");
  studentGrades.set("Bob", "B+");
  studentGrades.set("Charlie", "A+");

  let gradeDetails = "";
  studentGrades.forEach((grade, name) => {
    gradeDetails += `${name}: ${grade}<br>`;
  });

  output.innerHTML += `<div class="section"><h3>Student Grades (Map)</h3>
  <p>${gradeDetails}</p></div>`;

  // --------------------------
  //  Set Object
  // --------------------------
  const allSkills = new Set(["HTML", "CSS", "JS", "React", "Node.js", "JS"]); // 'JS' duplicate
  const uniqueSkills = [...allSkills];

  output.innerHTML += `<div class="section"><h3>Unique Skills (Set)</h3>
  <p>${uniqueSkills.join(", ")}</p></div>`;
});