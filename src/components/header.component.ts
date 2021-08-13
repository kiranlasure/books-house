import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar">
  <div class="logoimg">
    <a href="">
      <img src="../app/../assets/logo0.PNG" alt=""   class="logo">
    </a>
  </div>
  <ul class="nav-list" >
    <li class="list-item">
      <a routerLink="/home" routerLinkActive="active">Home</a>
    </li>
    <li class="list-item"> 
      <a routerLink="/books" routerLinkActive="active">Books</a>
    </li>
    <li class="list-item">
      <a routerLink="/books/addbooks" routerLinkActive="active">Add Books</a>
    </li>
    <li class="list-item">
      <a routerLink="/newuser" routerLinkActive="active">Register</a>
    </li>
    <li class="list-item">
      <a routerLink="aboutus" routerLinkActive="active">About us</a>
    </li>
    <li class="list-item">
      <a routerLink="/auth" routerLinkActive="active">Login</a>
    </li>
  </ul>
  <div class="menu">
    <div class="menu-line"></div>
    <div class="menu-line"></div>
    <div class="menu-line"></div>
  </div>
</nav>
  `,
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
 
}
