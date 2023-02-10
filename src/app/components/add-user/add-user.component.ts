import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
//import { User } from 'src/app/models/user';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 /* user={
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
  }*/
 
 user={
  id : '',
  CIN :'' ,
  FirstName: '',
  LastName: '' ,
  Address:'',
  UserName:'' ,
  Password: '',
  Role:'' ,
  DateOfBirth: '',
  Gender: '',
  Email:'' ,
  StartDateInAdvans: '',
  Departement:'' ,
  Agence: '',
  Manager_STF_Code:'',
  }
  //user: User = new User();
 /* user: User = new User(1,"CIN ","FirstName","LastName","Address","UserName","Password","Role","DateOfBirth", "Gender","Email",
  "StartDateInAdvans","Departement","Agence",1);*/
 
 constructor(private formBuilder: FormBuilder,private http: HttpClient, private dataService:DataserviceService,private router:Router) { }

  /*get cin(){
    return this.adduserForm.get('cin');
    }
    get nom(){
      return this.adduserForm.get('nom');
    }
    get prenom(){
      return this.adduserForm.get('prenom');
    }
    get  datenaiss(){
      return this.adduserForm.get('datenaiss');
    }
    get adresse(){
      return this.adduserForm.get('adresse');
     }
get email(){
  return this.adduserForm.get('email');
}
get datedebut(){
  return this.adduserForm.get('datedebut');
}
get code(){
  return this.adduserForm.get('code');
}*/
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

/*AddUser(){
  console.log(this.user);
  /*this.authentificationservice.Add(this.user)
  
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
    },*/
   /* AddUser(){
      console.log(this.user);
      this.dataService.AddUser(this.user)
      
      .subscribe(
        res=>{//this.adduserForm.value;
         this.user={
          id: '',
           CIN: '',
           FirstName: '',
           LastName: '',
           Address: '',
           UserName: '',
           Password: '',
          Role: this.selectrole,
          DateOfBirth: '',
            Gender: this.test,
            Email:'',
           StartDateInAdvans: '',
            Departement:this.selectdept,
            Agence: '',
            Manager_STF_Code: '',
          }
          console.log(res);
          this.ngOnInit();
         } , error => {
          console.log(error);
        }
      );
    }
    
  
  }
*/
  







/*this.authentificationservice.Add(this.user)
  
  .subscribe(
    res=>{//this.adduserForm.value;
     this.user={
      id: '',
       CIN: this.adduserForm.controls.CIN,
    nom: this.adduserForm.controls.FirstName,
       prenom: this.adduserForm.controls.LastName,
       adresse: this.adduserForm.controls.Address,
       Username: this.adduserForm.controls.Username,
      pass: this.adduserForm.controls.Password,
      Role: this.selectrole,
      //  DateOfBirth: '',
        Gender: this.test,
        email:this.adduserForm.controls.Email,
       // StartDateInAdvans: '',
        departement :this.selectdept,
        agence: this.adduserForm.controls.Agence,
       Code: this.adduserForm.controls.code,
      }
      console.log(res);
      this.ngOnInit();
    },



      err=>{
        console.log(err);
      }
  )
    
  }
}*/


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

/*AddUser(){
 
  if(this.adduserForm.valid){
    //perform logic for register
    this.dataService.AddUser(this.adduserForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message)
      })
      ,error:(err=>{
        alert(err?.error.message)
      })
    })
    console.log(this.adduserForm.value);
  }*/
  /*AddUser(){
   
 this.user.ID=this.adduserForm.get('id')?.value;
    this.user.CIN=this.adduserForm.get('cin')?.value;
    this.user.FirstName=this.adduserForm.get('nom')?.value;
  this.user.LastName=this.adduserForm.get('prenom')?.value;
      this.user.Address=this.adduserForm.get('adresse')?.value;
      this.user.UserName=this.adduserForm.get('Username')?.value;
      this.user.Password=this.adduserForm.get('pass')?.value;
  this.user.Role=this.adduserForm.get('role')?.value;
  this.user.DateOfBirth=this.adduserForm.get('datenaiss')?.value;
  this.user.Gender=this.adduserForm.get('gender')?.value;
  this.user.Email=this.adduserForm.get('email')?.value;
  this.user.StartDateInAdvans=this.adduserForm.get('datedebut')?.value;
  this.user.Departement=this.adduserForm.get('depa')?.value;
  this.user.Agence=this.adduserForm.get('agence')?.value;
  this.user.Manager_STF_Code=this.adduserForm.get('code')?.value;
    

    this.dataService.AddUser(this.user).subscribe(
    res=>{
      console.log("user added successfully");
    },
    error=>{
      console.log("Error adding user");
    }
    );
    }*/

    
  
  
 // }



  }