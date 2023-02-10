import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup 

  constructor(private fb:FormBuilder,private authentificationservice: AuthentificationService,private router:Router) { }
  validate_username(){
    return this.loginForm.get('Username')?.invalid&&this.loginForm.controls['Username'].touched
  }
  
  validate_password(){
    return this.loginForm.get('Password')?.invalid&&this.loginForm.controls['Password'].touched
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username:['',Validators.required],
      Password:['', Validators.required],
    


    })
    
  }
 
SignIn() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
    //send the onj to database
    this.authentificationservice.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{alert(res.message)
          console.log(res);
          console.log("hello");
          this.router.navigate(['/dashbordadmin']);
          //this.loginForm.reset();

        /*  if(this.loginForm.get('role').value=='Admin')
         { this.router.navigate(['/dashbordadmin']);}
         else if(this.loginForm.get('role').value=='Agent')
{          this.router.navigate(['/dashbordagent']);
        }*/
        },
      error:(err)=>{
        alert(err?.error.message)
      }
})
}
}
}
    




      /* if (data.role === 'admin') {
          this.router.navigate(['/dashbordadmin']);
        } else if (data.role === 'agent') {
          this.router.navigate(['/dashbordagent']);
        }
       }
        else{
          console.log("form is not valid");
        }
      } );
  }
}*/


  


  
