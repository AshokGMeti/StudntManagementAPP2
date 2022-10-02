import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ListStudentComponent } from '../list-student/list-student.component';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private update:UserService, private router:ActivatedRoute) { }
  editStudent=new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  });
  ngOnInit(): void {
    this.update.getStudentById(this.router.snapshot.params['id']).subscribe((data:any)=>{
      console.log(data);
      this.editStudent=new FormGroup({
        name:new FormControl(data['name']),
        email:new FormControl(data['email'])
      });
    })
  }
  updateData()
  {
    this.update.updateStudentData(this.router.snapshot.params['id'], this.editStudent.value).subscribe((data)=>{
      console.log(data);
      this.ngOnInit();
    })
  }

}
