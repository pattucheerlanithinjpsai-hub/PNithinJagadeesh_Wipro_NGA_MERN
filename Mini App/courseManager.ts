import { Course, Instructor, Student, CourseCategory } from "./models";
import { LogAction } from "./decorators";

class CourseManager {
  private courses: Map<number, Course> = new Map();
  private instructors: Instructor[] = [];
  private students: Student[] = [];
  private courseIdCounter = 1;

  @LogAction
  addInstructor(instructor: Instructor): void {
    this.instructors.push(instructor);
  }

  @LogAction
  addStudent(student: Student): void {
    this.students.push(student);
  }

  @LogAction
  createCourse(title: string, category: CourseCategory, instructorId: number): void {
    const course: Course = {
      id: this.courseIdCounter++,
      title,
      category,
      instructorId,
      enrolledStudents: []
    };
    this.courses.set(course.id, course);
  }

  @LogAction
  enrollStudent(courseId: number, studentId: number): void {
    const course = this.courses.get(courseId);
    if (course) {
      course.enrolledStudents.push(studentId);
    }
  }

  listCourses(): void {
    for (const course of this.courses.values()) {
      console.log(`📘 '${course.title}' [${course.category}] - Instructor ID: ${course.instructorId}`);
    }
  }

  listStudents(): void {
    const iterator = this.students[Symbol.iterator]();
    let result = iterator.next();
    while (!result.done) {
      const student = result.value;
      console.log(`👨‍🎓 ${student.name} (${student.email})`);
      result = iterator.next();
    }
  }
}

export default CourseManager;