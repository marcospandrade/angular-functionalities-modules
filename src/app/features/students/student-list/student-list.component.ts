import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import {
  faPencilAlt,
  faTrashAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  // Icons
  faPencil = faPencilAlt;
  faTrash = faTrashAlt;
  faAddUser = faUserPlus;

  students: Student[] = [];

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  onDelete(id: number) {
    this.studentService.deleteById(id);
  }

  private loadStudents() {
    this.students = this.studentService.findAll();
  }
}
