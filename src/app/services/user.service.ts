import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url="http://localhost:3000/student";
  constructor(private http:HttpClient) { }
  getAllStudent()
  {
   return this.http.get(this.url)
  }
  saveStudent(data:any)
  {
    return this.http.post(this.url,data);
  }
  deleteData(data:any)
  {
    return this.http.delete(`${this.url}/${data}`);
  }


  getStudentById(data:any){
    return this.http.get(`${this.url}/${data}`);
  }
  updateStudentData(data:any, formData:any)
  {
    return this.http.put(`${this.url}/${data}`,formData);
  }
}
