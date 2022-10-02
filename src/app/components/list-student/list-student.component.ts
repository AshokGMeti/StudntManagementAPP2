import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private student:UserService) { }
  studentData:any=[];
  ngOnInit(): void {
    this.student.getAllStudent().subscribe(data=>{
      console.log(data);
      this.studentData=data;
    });
  }
  deleteData(data:any)
  {
    this.student.deleteData(data).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }

}
