import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
private baseUrl="http://localhost:33464/api/User/"  
  constructor(private http: HttpClient) { }

  GetAllUsers():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl);

}


AddUser(adduserRequest:User){
    
    return this.http.post<User>(`${this.baseUrl}register`,adduserRequest);
  } 


  GetUser(id:number): Observable<User>{
  return this.http.get<User>(this.baseUrl + id);
  }


  updateuser(id:number,UserDetail:User) : Observable<User>{
    return this.http.put<User>(this.baseUrl + id, UserDetail);
  }
 
deletuser(id: number) : Observable<User>{
return this.http.delete<User>(this.baseUrl + id);
}

  
}
 