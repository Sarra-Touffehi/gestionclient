import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataserviceService } from 'src/app/services/dataservice.service';
//import { Userid } from 'src/app/models/userid';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
listing : User[]= [];

  constructor(private dataservice:DataserviceService,private router:Router) { }

  ngOnInit(): void {
   this.dataservice.GetAllUsers()
    .subscribe({
      next: (users)=>{
        this.listing= users;
        console.log(this.listing);
      },
      error :(response)=>{
        console.log(response);
      }
    })
  }
  editer(){
    this.router.navigate(['/edituser']);
  }
 /* look(){
    this.router.navigate(['/detailuser']);
  }*/
  

  }

