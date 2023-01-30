import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
 // @Input() clientId: number;
  //client: Client;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   /* this.http.get<Client>(`api/clients/${this.clientId}`).subscribe(client => {
      this.client = client;
    });*/
  }

}
