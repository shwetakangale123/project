import { Component, OnInit } from '@angular/core';
import { Service02Service } from './Get-Post-Delete-Update Service/service02.service';

@Component({
  selector: 'app-service-se-po-up-de',
  templateUrl: './service-se-po-up-de.component.html',
  styleUrls: ['./service-se-po-up-de.component.css']
})
export class ServiceSePoUpDeComponent implements OnInit {

  dataAPI:any;
  data1:any;
  constructor(private myService:Service02Service ) { }

  ngOnInit(): void {
    this.reciveGetData();
    this.sendData();
    this.updatedData();
    this.deletedData();
  }


  reciveGetData(){
    this.myService.getApi().subscribe(
      (res)=>{
        console.log(res);
        this.dataAPI=res;
        this.dataAPI=this.dataAPI.data1;
        console.log(this.dataAPI)


      },
      (err)=>{
        console.log(err);

      }
    )
  }


sendData(){
this.data1={
  name:'shweta',
  dept:'elect'
}

this.myService.sendApiData(this.data1).subscribe(
  (res)=>{
    console.log(res);
  },
  (err)=>{
    console.log(err);
  }
)
}


updatedData(){

  this.data1={
    name:'shree',
    skill:'childish'
  }

  this.myService.updateData(this.data1).subscribe(
    (res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    }
  )
}

deletedData(){
  let id2=1;

  this.myService.deleteApi(this.data1).subscribe(
    (res)=>{
      console.log(res);
    },

    (err)=>{
      console.log(err);
    }
  )
}












}
