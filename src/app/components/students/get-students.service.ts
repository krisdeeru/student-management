import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetStudentsService {

  constructor(private http : HttpClient) { }

  getStudents(){
    let url='http://localhost:8080/student/getStudents';
    return this.http.get(url);
  }
}
