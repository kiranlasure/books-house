import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  users :any= [];
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  onLoginSubmit(){
    
    let username = this.loginform.get('email')?.value
    let password = this.loginform.get('password')?.value;
    this.loginService.login(username,password).subscribe(
      data=>{
        if(data){
          this.users = data;
          for(let i=0; i<this.users.length; i++){
            if(this.loginform.value.email = this.users[i]["email"] && this.loginform.value.password == this.users[i]["password"]){
              localStorage.setItem('usertype',this.users[i]['userType']);
              this.router.navigate(['/home']);
            }
          }
        }
      }
    )
    
  }
  newUser(){
    this.router.navigate(['newuser']);
  }
}
