import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user={
  id : String,
  CIN : String ,
  FirstName: String ,
  LastName: String ,
  Address: String,
  UserName: String,
  Password: String,
  Role: String,
  // DateOfBirth: '',
  Gender: String,
  Email: String,
  //StartDateInAdvans: '',
  Departement: String,
  Agence: String,
  Manager_STF_Code: String,
  }
 
 constructor(private formBuilder: FormBuilder,private http: HttpClient, private authentificationservice:AuthentificationService,private router:Router) { }

  get cin(){
    return this.adduserForm.get('cin');
    }
    get nom(){
      return this.adduserForm.get('nom');
    }
    get prenom(){
      return this.adduserForm.get('prenom');
    }
    /*get  datenaiss(){
      return this.adduserForm.get('datenaiss');
    }*/
    get adresse(){
      return this.adduserForm.get('adresse');
     }
get email(){
  return this.adduserForm.get('email');
}
/*get datedebut(){
  return this.adduserForm.get('datedebut');
}*/
get code(){
  return this.adduserForm.get('code');
}
    isValidPattern(){
      return this.adduserForm.get('nom')?.errors?.['pattern']
      && this.adduserForm.controls['nom'].touched; 
      }


      isValidPattern1(){
        return this.adduserForm.get('prenom')?.errors?.['pattern']
        && this.adduserForm.controls['prenom'].touched; 
        }
  adduserForm!:FormGroup;
   
    
  
  
  ngOnInit(): void {
    this.adduserForm=this.formBuilder.group(
      { id:[''],
        cin:['',[Validators.required, Validators.minLength(8)]],
        nom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        prenom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        //datenaiss:['',Validators.required],
        gender:['', [Validators.required]],
        adresse:['',Validators.required],
        Username:[''],
        pass:[''],
        role:['',Validators.required],
        email:['',Validators.required],
       //datedebut:['',Validators.required],
       depa:[''],
       agence:[''],
       code:['',Validators.required],

  })

}

test='';
radioFun(value:string):void{
  this.test=value;
  return console.log(this.test);
  
}
selectrole='';
onSlected(value:string):void{
  this.selectrole=value;
  return console.log(this.selectrole);
}

selectdept='';
onSlecteddep(value:string):void{
  this.selectdept=value;
  return console.log(this.selectdept);
}
SendDatetoFunction(event: any) {
  console.log(event.target.value);
}

AddUser(){
  console.log(this.user);
  this.authentificationservice.Add(this.user)
  
  .subscribe(
    res=>{//this.adduserForm.value;
     this.user={
       ID: this.adduserForm.controls.id,
       CIN: this.adduserForm.controls.cin,
       FirstName: this.adduserForm.controls.nom,
       LastName: this.adduserForm.controls.prenom,
       Address: this.adduserForm.controls.adresse,
       UserName: this.adduserForm.controls.Username,
       Password: this.adduserForm.controls.pass,
      Role: this.selectrole,
      //  DateOfBirth: '',
        Gender: this.test,
        Email:this.adduserForm.controls.email,
       // StartDateInAdvans: '',
        Departement:this.selectdept,
        Agence: this.adduserForm.controls.agence,
        Manager_STF_Code: this.adduserForm.controls.code,
      }
      console.log(res);
      this.ngOnInit();
    },
      err=>{
        console.log(err);
      }
  )
    
  }
}


/*
AddUser(){
if(this.adduserForm.valid)
{ this.authentificationservice.Add(this.adduserForm.value)
.subscribe({next:(res=>{
  this.user={
    id: 0,
    cin: '',
    firstName: '',
    lastName: '',
    address: '',
    userName: '',
    password: '',
    role: "",
    dateOfBirth: '',
    gender: '',
    email:'',
    startDateInAdvans: '',
    departement: '',
    agence: '',
    manager_STF_Code: ''

  }
  console.log(res);
  this.ngOnInit();
  alert(res.message)
  console.log("hello");
})
,error:(err=>{
  alert(err?.error.message)
})

})
console.log(this.adduserForm.value)}*/






