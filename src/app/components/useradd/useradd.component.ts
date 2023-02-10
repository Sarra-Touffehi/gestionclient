import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataserviceService } from 'src/app/services/dataservice.service';
@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
 adduserRequest:User={

    cin:'',
    firstName:'',
    lastName:'',
    address:'',
    userName:'',
    password:'',
    role:'',
    dateOfBirth:'',
    gender:'',
    email:'',
    startDateInAdvans:'' ,
    departement:'',
    agence:'',
    manager_STF_Code:0,
};
  constructor(private fb: FormBuilder,private dataservice:DataserviceService,private router:Router) { }
  adduserForm!:FormGroup;

  ngOnInit(): void {
    this.adduserForm=this.fb.group(
      { 
        cin:['',[Validators.required, Validators.minLength(8)]],
        nom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        prenom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        datenaiss:['',Validators.required],
        gender:['',Validators.required],
        adresse:['',Validators.required],
        Username:['',Validators.required],
        pass:['',Validators.required],
        role:['',Validators.required],
        email:['',Validators.required],
       datedebut:['',Validators.required],
       depa:[''],
       agence:[''],
       code:['',Validators.required],

  })

   
  }

  selectrole='';
  onSlected(value:string):void{
    this.selectrole=value;
    return console.log(this.selectrole);
  }
  test='';
radioFun(value:string):void{
  this.test=value;
  return console.log(this.test);
}
test1='';
radioFun1(value:string):void{
  this.test=value;
  return console.log(this.test);
}
selectdept='';
onSlecteddep(value:string):void{
  this.selectdept=value;
  return console.log(this.selectdept);
}
AddUser(){
console.log(this.adduserRequest);
this.dataservice.AddUser(this.adduserRequest)
.subscribe({
  next:(User)=>{
    this.router.navigate(['listusers']);
  }
})
}
}
