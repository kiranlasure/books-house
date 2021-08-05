import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserRegister } from 'src/app/shared/header/models/register.model';
import { AppState } from 'src/app/store/app.state';
import { addUser } from '../state/newuser.actions';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registrationForm: FormGroup
  constructor(private router: Router,private store: Store<AppState>) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      fName: new FormControl(null,[Validators.required ]),
        lName: new FormControl(null,[Validators.required]),
        email: new FormControl(null,[Validators.required]),
        password: new FormControl(null,[Validators.required]),
        userType: new FormControl("Admin"),  
    })
  }


  onRegister(){
    if(!this.registrationForm.valid){
      return;
    }
    const user : UserRegister ={
      fName: this.registrationForm.value.fName,
      lName: this.registrationForm.value.lName,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      userType: this.registrationForm.value.userType
    };
    this.store.dispatch(addUser({user}))
    console.log("user data is",user)
  }
  backtologin(){
    this.router.navigate(['login']);
  }
}
