import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 
 constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  get cin(){
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
      { cin:['',[Validators.required, Validators.minLength(8)]],
        nom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        prenom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        datenaiss:['',Validators.required],
        adresse:['',Validators.required],
        role:['',Validators.required],
        email:['',Validators.required],
       datedebut:['',Validators.required],
       depa:[''],
       code:['',Validators.required],

  })

}
onSubmit(){
  if (this.adduserForm.valid) {
    this.http.post('https://your-api-url.com/api/clients', this.adduserForm.value)
      .subscribe(response => {
        console.log('user added successfully');
      }, error => {
        console.log('Error adding user');
      });
  }
}
}

