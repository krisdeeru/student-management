import { Component, OnInit } from '@angular/core';
import {Student} from '../../Students'
import {STUDENTS} from '../../mock-students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = STUDENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
