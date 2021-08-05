import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

const routes: Routes = [
  // { 
  //   path:'', component:LoginComponent
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:'header',
    component:HeaderComponent, 
  },
 
  {
    path:'forgetPass',
    component:ForgetPasswordComponent
  },
  {
    path:"navigation",
    component:NavigationComponent,
    // children:[
    //   { 
    //     path: '', redirectTo: 'book', pathMatch: 'full'
    //   },
    //   {
    //     path: 'books/book',
    //     component: BooksComponent,
    //   },
    //   {
    //     path:'addbooks',
    //     component:AddbooksComponent
    //   },
      
    // ]
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'newuser',
    loadChildren: () =>
      import('./newuser/newuser.module').then((m) => m.NewuserModule),
  },
  {
    path:'books',
    loadChildren:()=>
    import('./books/books.module').then((m)=>m.BooksModule)
  },
  {
    path:'auth',
    loadChildren:()=>
    import('./auth/auth.module').then((m)=>m.AuthModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
