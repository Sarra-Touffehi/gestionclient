import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  /*clients: any[];*/


  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  //  this.getClients();
    
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
detailsClient(){
  this.router.navigate(['/detailsclient']);
}
}



