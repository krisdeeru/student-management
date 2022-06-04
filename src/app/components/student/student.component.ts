import { Component, OnInit } from '@angular/core';
import {Student} from '../../Students'
import {STUDENTS} from '../../mock-students';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import{Cources} from '../../Cources'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public someOne: any = '123';
  public firstName :String = 'rt';
  public lastName :String = 'rtewr';
  public serverEmail :String = 'dafsd';
  
  selectedGroup: any;

  public data: any ;
  courses : any;
  studentCourses:any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {

    let url='http://localhost:8080/course/getCourses';
    this.http.get(url).subscribe(
      data=>{
        this.courses = data;
      })

      let urlCourses='http://localhost:8080/student/getStudentDetail/'+this.route.snapshot.paramMap.get('id');
      this.http.get(urlCourses).subscribe(
        data=>{
          this.studentCourses = data;
          this.someOne = this.studentCourses.student.id;
          this.firstName = this.studentCourses.student.firstName;
          this.lastName = this.studentCourses.student.lastName;
          this.serverEmail = this.studentCourses.student.email;
        })  
  }

  changeName(event : any){

  }

  addCourse(){
  console.log(this.selectedGroup);
  let url = 'http://localhost:8080/course/addCourse';
    const headers = { 'content-type': 'application/json'} 
    var myObj = {
      courseId: this.selectedGroup.id,
      studentId: this.someOne
   }
     console.log(myObj);
     this.http.post(url,myObj,{'headers':headers}).subscribe(status => {
      window.location.reload();
    }, error => {
      console.log(error);
    }) 
  }

  onDelete(student: any){
    console.log(student);
    const headers = { 'content-type': 'application/json'} 
    let url = 'http://localhost:8080/course/removeCourse';
    var myObj = {
      courseId: student.course.id,
      studentId: this.someOne
   }
   this.http.post(url,myObj,{'headers':headers}).subscribe(status => {
    window.location.reload();
  }, error => {
    console.log(error);
  }) 
  }

}
