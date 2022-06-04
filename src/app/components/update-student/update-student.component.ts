import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  public someOne: any = '123';
  public firstName :String = 'rt';
  public lastName :String = 'rtewr';
  public serverEmail :String = 'dafsd';

  public data: any ;


  constructor(private http: HttpClient, private router: Router) { 

    this.data = this.router.getCurrentNavigation()?.extras.state;

    this.someOne = this.data.someData.id;
    this.firstName = this.data.someData.firstName;
    this.lastName = this.data.someData.lastName;
    this.serverEmail = this.data.someData.email;
 
  }

  ngOnInit(): void {

  
    
  }

  onSubmit(studentForm: NgForm){
    let url = 'http://localhost:8080/student/updateStudent';
    const headers = { 'content-type': 'application/json'} 
     console.log(studentForm.value);
     studentForm.value.id = this.someOne;
     console.log(studentForm.value);
     this.http.post(url,studentForm.value,{'headers':headers}).subscribe(status => {
      this.router.navigate(['students'])
    }, error => {
      console.log(error);
    }) 
  }

}
