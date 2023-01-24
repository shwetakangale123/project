import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service02Service {

  constructor(private http:HttpClient) { }

  getApi(){
    return this.http.get("https://reqres.in/api/users?page=2");
  }

  sendApiData(dt:any){
    return this.http.post("https://reqres.in/api/users",dt);
  }

  updateData(dt1:any){
    return this.http.put("https://reqres.in/api/users/2",dt1);
  }


  deleteApi(dt2:any){
    return this.http.delete("https://reqres.in/api/users/",dt2);
  }

  
}
