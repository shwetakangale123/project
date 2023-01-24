import { Component, OnInit } from '@angular/core';
import { Service01Service } from './service01/service01.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
   storingVariable:any;


  constructor(private myService:Service01Service) {

   }

  ngOnInit(): void {
    this.reciveData();
    this.getMessg();
  }

  reciveData(){

    this.myService.getApiData().subscribe(
      (res)=>{
        console.log(res);
        this.storingVariable=res;
      },

      (err)=>{
        console.log(err);
      }
    )
  }

  getMessg(){
    console.log("data uploaded");
  }

  


}

