import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,} from '@angular/common/http';
import {environment} from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  getStudent(){
   
   //let url= environment.STUDENT_BASE_URL+environment.STUDENT.GET_ALL_STUDENTS;
   let url = 'http://localhost:3000/student/list';
   return this.httpClient.get(url);
  }

  viewStudent(id: any){

  }

  editStudent(id: any,studentObj: any){

  }
  
  deleteStudent(id: any){

  }

  searchStudent(keyword: any){

  }
};
