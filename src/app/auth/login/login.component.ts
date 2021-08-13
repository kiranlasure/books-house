import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  users :any= [];
  currentUser: any;
  constructor(private router: Router, private loginService: LoginService,
    private toastr: ToastrService) { }

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
      data => {
        let successFlag = false;
        console.log(data);
        if(data){
          this.users = data;
          for(let i=0; i<this.users.length; i++){
            if(username = this.users[i]["email"] && password == this.users[i]["password"]){
              console.log("if");
              console.log("username", username);
              console.log(this.currentUser);
              localStorage.setItem('user', this.currentUser);
              console.log(localStorage.getItem("user"));
              // this.toastr.success('Login Success');
              successFlag = true;
              localStorage.setItem('loggedIn',username);
              this.router.navigate(['/']);
            }else{
              successFlag = false;
            }
          }
          console.log(successFlag);
          if(!successFlag){
            console.log(successFlag);
            this.toastr.error('Invalid email or password');
          }
        }else{
          console.log("Users not found");
        }
      },
    )
    
  }
  newUser(){
    this.router.navigate(['newuser']);
  }
  ngOnDestroy(){
    if(localStorage.getItem('loggedIn')){
      this.toastr.success('Login Success');
    }
  }
}
