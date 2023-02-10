import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 
  private baseUrl:string="http://localhost:33464/api/User/"  

  constructor(private http: HttpClient/*,private router: Router*/) { }

/*login(loginObj: any){
  return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
}
*/
login(userauth:User){
  return this.http.post<any>(`${this.baseUrl}authenticate`,userauth);
}


}
 

