import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 
  private baseUrl:string="http://localhost:33464/api/User"  

  constructor(private http: HttpClient/*,private router: Router*/) { }

login(loginObj: any){
  return this.http.post<any>(`${this.baseUrl}/authenticate`,loginObj);
}
Add(userObj:any){
  return this.http.post<any>(`${this.baseUrl}`,userObj);
  
}
}


 /* login(credentials: {username: string, password: string}) {
    return this.http.post(this.apiUrl, credentials);


  }*/
 /* authenticate(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}authenticate`, user);
}*/

 

