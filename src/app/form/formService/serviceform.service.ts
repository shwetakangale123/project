import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceformService {

  constructor(private http:HttpClient) { 

  }

  getApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  postApi(z:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users",z)
  }


  
}
