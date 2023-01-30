import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router, private authentificationservice: AuthentificationService) {}
  /*toform(){
    this.router.navigate(['/login']);}
  
toform(){
    this.authentificationservice.toform();
  }*/
  Afficher(){
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    

}}


