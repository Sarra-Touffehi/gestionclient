import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientserviceService } from 'src/app/services/clientservice.service';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  listing : Client[]= [];



  constructor(private http: HttpClient,private router: Router,private clientservice:ClientserviceService) { }

  ngOnInit(): void {
    this.clientservice.GetAllClients()
    .subscribe({
      next: (clients)=>{
        this.listing= clients;
        console.log(this.listing);
      },
      error :(response)=>{
        console.log(response);
      }
    })
    
    }
  
    detailsClient(){
      this.router.navigate(['/detailsclient']);
    }
/*getClients() {this.http.get('https://your-api-url.com/api/clients')
      .subscribe(data => {
        this.clients = data;
      }, error => {
        console.log('Error loading clients');
      });
  }
editClient(client) {
  this.http.put('https://your-api-url.com/api/clients/' + client.id, client)
    .subscribe(response => {
      this.getClients();
    },error => {
      console.log(error);
});


}

deleteClient(client) {
  this.http.delete('https://your-api-url.com/api/clients/' + client.id)
    .subscribe(response => {
      this.getClients();
    }, error => {
      console.log(error);
    });
}*/

}



