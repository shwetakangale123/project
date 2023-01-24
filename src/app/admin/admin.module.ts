import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { Route, Routes } from '@angular/router';


const routes :Routes=[
  {path:'admin',loadChildren:()=>import('./admin-routing.module').then(mod=>mod.AdminRoutingModule)},
  
]


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
