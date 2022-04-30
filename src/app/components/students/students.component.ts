import { Component, OnInit } from '@angular/core';
import {Student} from '../../Students'
import {STUDENTS} from '../../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = STUDENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
