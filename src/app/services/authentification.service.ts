import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 
  
  private apiUrl = 'https://your-api-url.com/login';

  constructor(private http: HttpClient,private router: Router) { }
  login(credentials: {username: string, password: string}) {
    return this.http.post(this.apiUrl, credentials);
  }
}
 

