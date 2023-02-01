import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup 

  constructor(private fb:FormBuilder,private authentificationservice: AuthentificationService,private router:Router) { }
  validate_username(){
    return this.loginForm.get('username')?.invalid&&this.loginForm.controls['username'].touched
  }
  
  validate_password(){
    return this.loginForm.get('password')?.invalid&&this.loginForm.controls['password'].touched
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['', Validators.required],
    


    })
    
  }
 
/*SignIn() {
  if (this.loginForm.valid) {
    this.authentificationservice.login(this.loginForm.value)
      .subscribe(data => {
        if (data.role === 'admin') {
          this.router.navigate(['/dashbordadmin']);
        } else if (data.role === 'agent') {
          this.router.navigate(['/dashbordagent']);
        }
      });
  }
}*/
  
}

    /*get username() {
      return this.loginForm.get('username');
    }
  
    get password() {
      return this.loginForm.get('password');
    }*/
   
  
  



