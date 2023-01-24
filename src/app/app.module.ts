import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { TemplateComponent } from './Template form /template/template.component';

import { FormComponent } from './form/form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServiceComponent } from './service/service.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceSePoUpDeComponent } from './service-se-po-up-de/service-se-po-up-de.component';


@NgModule({
  declarations: [
    AppComponent,
    // TemplateComponent,
    FormComponent,
    ParentComponent,
    ChildComponent,
    ServiceComponent,
    ServiceSePoUpDeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
