import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  edituserForm!:FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private route:ActivatedRoute,private dataservice:DataserviceService  ) { }



 UserDetail:User={
    id:0,
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
       startDateInAdvans:'',
       departement:'',
       agence:'',
       manager_STF_Code:0,
   };


  ngOnInit(): void {



    this.edituserForm=this.fb.group(
      { id:[''],
        cin:[''],
        nom:[''],
        prenom:[''],
        datenaiss:[''],
   gender:[''],
        adresse:[''],
        Username:[''],
        pass:[''],
        role:[''],
        email:[''],
       datedebut:[''],
       depa:[''],
       agence:[''],
       code:[''],

      })





    this.route.paramMap.subscribe({
      next: (params)=>{
        const id =Number(params.get('id'));

        if(id){
          this.dataservice.GetUser(id)
          .subscribe ({
            next: (response)=>{
            this.UserDetail=response;
           console.log(response);
           
          }
          });

          }
        }
      })
    }
    UpdateUser(){
this.dataservice.updateuser(Number(this.UserDetail.id), this.UserDetail)
.subscribe({
  next: (Response)=>{
    console.log(this.UserDetail);
    this.router.navigate(['listusers']);
  }
});

    }


    supprimer(id: number){
      this.dataservice.deletuser(id)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['listusers']);
        }
      });
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


}

