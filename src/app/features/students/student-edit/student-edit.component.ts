import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
})
export class StudentEditComponent implements OnInit {
  id!: number;
  student?: Student;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentsService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.searchStudent();
  }

  private searchStudent() {
    this.student = this.studentService.findById(this.id);
    console.log(this.student);
  }

  onUpdate() {
    this.studentService.update(this.id, this.student!);

    this.router.navigateByUrl('/students');
  }
}
