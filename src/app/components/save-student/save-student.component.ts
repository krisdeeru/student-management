import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrls: ['./save-student.component.css']
})
export class SaveStudentComponent implements OnInit {

  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(studentForm: NgForm){
    let url = 'http://localhost:8080/student/saveStudent';
    const headers = { 'content-type': 'application/json'} 
     console.log(studentForm.value);
     this.http.post(url,studentForm.value,{'headers':headers}).subscribe(status => {
      this.router.navigate(['students'])
    }, error => {
      console.log(error);
    }) 
  }
}
