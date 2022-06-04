import { Component, OnInit } from '@angular/core';
import {Student} from '../../Students'
import {STUDENTS} from '../../mock-students';
import {GetStudentsService} from './get-students.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any = STUDENTS;

  constructor(private getStudents: GetStudentsService, private http:HttpClient,private router:Router) { 

  }

  ngOnInit(): void {
    this.getStudentsData()
  }

  private getStudentsData(){
    this.students = this.getStudents.getStudents().subscribe(
      data=>{
        this.students = data;
        console.log(data);
        console.log(this.students);
      })
  }
  public onDelete(event: Event, id:string) {
    console.log('Open '+ event);
    console.log(id)
    let url = 'http://localhost:8080/student/deleteStudent/'+id;
    this.http.delete(url).subscribe({
      next: (v) => { 
        window.location.reload()
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }

  public onUpdate(student:any){
     this.router.navigate(['update-student'], {state: {someData: student}})
  }

  public onView(student:any){
     this.router.navigate(['view-student/'+student.id], {state: {someData: student}})
  }
}

