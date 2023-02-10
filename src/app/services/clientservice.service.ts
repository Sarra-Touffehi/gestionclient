import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  private baseUrl="http://localhost:33464/api/Client/"  
  constructor(private http: HttpClient) { }
  GetAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl);
  
  }
  
}
