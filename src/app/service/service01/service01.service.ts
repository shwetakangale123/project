import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service01Service {

  constructor(private http:HttpClient) {

  }

  getApiData(){

    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }



   



}
