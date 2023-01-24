import { Component, OnInit } from '@angular/core';
import { ServiceformService } from './formService/serviceform.service';

 @Component({
  selector: 'app-form',
   templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  a:any;
  b:any;
  c:any;
  d:any;
  e:any;
  data:any;
  postData:any;
  


  constructor( private myser:ServiceformService) {

   }


  ngOnInit(): void {

  }

  getAPIData(){
     this.myser.getApi().subscribe(
      (res)=>{
        console.log(res);
        this.data=res;
      },
    (err)=>{
      console.log(err);
    }

     )
  }

  recivePostData(){
    this.postData={
      
      
    }
  }








  

 }


 