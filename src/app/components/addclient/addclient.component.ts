import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  addclForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private http: HttpClient) { }
  get cin(){
    return this.addclForm.get('cin');

    }
    get nom(){
      return this.addclForm.get('nom');
    }
    get prenom(){
      return this.addclForm.get('prenom');
    }
    get  datenaiss(){
      return this.addclForm.get('datenaiss');
    }
     get adresse(){
      return this.addclForm.get('adresse');
     }
     get num(){
      return this.addclForm.get('num');
     }
     get salaire(){
      return this.addclForm.get('salaire');
     }
     get codeseg(){
      return this.addclForm.get('codeseg');
     }

     get chargecred(){
      return this.addclForm.get('chargecred');
     }
     get occ(){
      return this.addclForm.get('occ');
     }
     get datecreation(){
      return this.addclForm.get('datecreation');
     }
     get scorecred(){
      return this.addclForm.get('scorecred');
     }
     get assets(){
      return this.addclForm.get(' assets');
     }
     isValidPattern(){
      return this.addclForm.get('nom')?.errors?.['pattern']
      && this.addclForm.controls['nom'].touched; 
      }
      isValidPattern1(){
        return this.addclForm.get('prenom')?.errors?.['pattern']
        && this.addclForm.controls['prenom'].touched; 
        }
      
  ngOnInit(): void {
    this.addclForm=this.formBuilder.nonNullable.group(
      {
        cin:['',Validators.minLength(8)],
        nom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        prenom:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
        datenaiss:['',Validators.required],
        adresse:['',Validators.required],
        num:['',Validators.minLength(8)],
        email:[''],
        salaire:['',Validators.required],
        codeseg:[0,Validators.required],
        chargecred:['',Validators.required],
        occ:['',Validators.required],
        domaine:[''],
        datecreation:['',Validators.required],
        niv:[''],
        etatCivil:[''],
        assets:['',Validators.required],
       } )
  }
  onSubmit() {
    if (this.addclForm.valid) {
      this.http.post('https://your-api-url.com/api/clients', this.addclForm.value)
        .subscribe(response => {
          console.log('Client added successfully');
        }, error => {
          console.log('Error adding client');
        });
    }
  }
}
  


