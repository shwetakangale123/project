import { Injectable } from '@angular/core';
import{Httpclient} from'@angular/common/http;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:Httpclient) { }
}
