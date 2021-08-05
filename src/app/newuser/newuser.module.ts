import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { NewUserEffects } from './state/newuser.effects';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserComponent,
  },
];

@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forRoot([NewUserEffects])
  ]
})
export class NewuserModule { }
