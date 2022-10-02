import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private student:UserService) { }
  addStudent=new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  });

  ngOnInit(): void {
  }
  saveData(data:any)
  {
    this.student.saveStudent(this.addStudent.value).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }

}
