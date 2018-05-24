import { Injectable } from '@angular/core';
import { Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map';

import { environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  constructor(
    private http : Http
  ) { }

  getUser(userCredentials){

    console.log(userCredentials);

    let headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post(`${environment.baseUrl}/auth/login`,userCredentials,{headers:headers})
      .map(res => res.json());
  }

}
