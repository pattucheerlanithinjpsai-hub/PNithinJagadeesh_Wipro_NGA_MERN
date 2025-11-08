document.getElementById("runDemo").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";

  // let and const
  let courseName = "Web Development";
  const instituteName = "Tech Academy";

  // Spread Operator
  const coreSubjects = ["HTML", "CSS", "JavaScript"];
  const advancedSubjects = ["React", "Node.js"];
  const allSubjects = [...coreSubjects, ...advancedSubjects];

  // Arrow Function
  const greet = name => `Welcome, ${name}, to the ${courseName} course at ${instituteName}!`;

  // Class Definition
  class Student {
    constructor(name, age, skills) {
      this.name = name;
      this.age = age;
      this.skills = skills;
    }

    display() {
      return `${this.name}, Age: ${this.age}, Skills: ${this.skills.join(", ")}`;
    }
  }

  // Student Instances
  const student1 = new Student("Aarav", 20, ["HTML", "CSS", "JavaScript"]);
  const student2 = new Student("Diya", 22, ["JavaScript", "React", "Node.js"]);

  // Map for Grades
  const studentGrades = new Map();
  studentGrades.set(student1.name, "A");
  studentGrades.set(student2.name, "B+");

  // Set for Unique Skills
  const allSkills = new Set([...student1.skills, ...student2.skills]);

  // Dynamic Display
  output.innerHTML += `
    <section>
      <h2>Course Info</h2>
      <p><strong>Course:</strong> ${courseName}</p>
      <p><strong>Institute:</strong> ${instituteName}</p>
    </section>
    <section>
      <h2>Subjects</h2>
      <p>${allSubjects.join(", ")}</p>
    </section>
    <section>
      <h2>Students</h2>
      <p>${greet(student1.name)}</p>
      <p>${student1.display()}</p>
      <p>${greet(student2.name)}</p>
      <p>${student2.display()}</p>
    </section>
    <section>
      <h2>Grades</h2>
      ${Array.from(studentGrades).map(([name, grade]) => `<p>${name}: ${grade}</p>`).join("")}
    </section>
    <section>
      <h2>Unique Skills</h2>
      <p>${[...allSkills].join(", ")}</p>
    </section>
  `;
});