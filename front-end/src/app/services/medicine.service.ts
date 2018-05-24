import { Injectable } from '@angular/core';
import { Headers, Http} from "@angular/http";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { environment} from "../../environments/environment";

@Injectable()
export class MedicineService {

  constructor(
    private http: Http
  ) { }

  getMedicine(){
    let headers = new Headers();
    headers.append('Content-type','application/json');

  return this.http.get(`${environment.baseUrl}/medicine`,{headers:headers})
    .map(res => res.json());
  }

  createMedicine(medicine){

    let headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post(`${environment.baseUrl}/medicine`,medicine,{headers:headers})
      .map(res => res.json());
  }



}
