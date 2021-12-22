import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [];
  constructor() {
    this.loadStudents();
  }

  save(student: Student) {
    student.id = this.nextId();
    this.students.push(student);
  }

  update(id: number, student: Student) {
    const index = this.students.findIndex((s) => s.id === id);
    this.students.splice(index, 1, student);
  }

  deleteById(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    this.students.splice(index, 1);
  }

  findById(id: number) {
    return this.students.find((s) => s.id === id);
  }

  findAll() {
    return this.students;
  }

  private nextId() {
    let lastId = 0;

    if (this.students.length > 0) {
      lastId = Math.max(...this.students.map((student) => student.id));
    }

    return ++lastId;
  }

  private loadStudents() {
    this.students.push(
      new Student(1, 'Student 1', 'student1@gmail.com', '01-01-1998')
    );
    this.students.push(
      new Student(2, 'Student 2', 'student2@gmail.com', '02-02-1998')
    );
    this.students.push(
      new Student(3, 'Student 3', 'student3@gmail.com', '03-03-1998')
    );
    this.students.push(
      new Student(4, 'Student 4', 'student4@gmail.com', '04-04-1998')
    );
  }
}
