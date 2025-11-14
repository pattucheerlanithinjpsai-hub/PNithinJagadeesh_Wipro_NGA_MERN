"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
class CourseManager {
    constructor() {
        this.courses = new Map();
        this.instructors = [];
        this.students = [];
        this.courseIdCounter = 1;
    }
    addInstructor(instructor) {
        this.instructors.push(instructor);
    }
    addStudent(student) {
        this.students.push(student);
    }
    createCourse(title, category, instructorId) {
        const course = {
            id: this.courseIdCounter++,
            title,
            category,
            instructorId,
            enrolledStudents: []
        };
        this.courses.set(course.id, course);
    }
    enrollStudent(courseId, studentId) {
        const course = this.courses.get(courseId);
        if (course) {
            course.enrolledStudents.push(studentId);
        }
    }
    listCourses() {
        for (const course of this.courses.values()) {
            console.log(`📘 '${course.title}' [${course.category}] - Instructor ID: ${course.instructorId}`);
        }
    }
    listStudents() {
        const iterator = this.students[Symbol.iterator]();
        let result = iterator.next();
        while (!result.done) {
            const student = result.value;
            console.log(`👨‍🎓 ${student.name} (${student.email})`);
            result = iterator.next();
        }
    }
}
__decorate([
    decorators_1.LogAction
], CourseManager.prototype, "addInstructor", null);
__decorate([
    decorators_1.LogAction
], CourseManager.prototype, "addStudent", null);
__decorate([
    decorators_1.LogAction
], CourseManager.prototype, "createCourse", null);
__decorate([
    decorators_1.LogAction
], CourseManager.prototype, "enrollStudent", null);
exports.default = CourseManager;
