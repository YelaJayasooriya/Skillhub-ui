import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  
})
export class StudentListComponent implements OnInit {

  _id:string;
  first_name:string;
  last_name:number;
  email:string;
  password:string;

  studentResult:any;
  studentList:any;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getstudentList();
  }

  getstudentList(){
    this.studentService.getStudent().subscribe(response =>{

      console.log(response);
    this.studentResult=response;
    this.studentList=this.studentResult.result;
    }
    )}
}
