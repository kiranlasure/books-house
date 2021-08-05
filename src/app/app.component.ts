import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('menu', {read: ElementRef}) menu: ElementRef;
  // @ViewChild('toggle', {read: ElementRef}) toggle: ElementRef;
 
  // visible: boolean;
  // state: string;

  title= 'training'
  constructor(private ref: ElementRef) {}

  ngOnInit(): void {
      // this.visible = false;
      // this.state = 'closed';
  }

//   toggleMenu() {
//     this.visible = true;
//     setTimeout(() => {
//         this.state = this.state == "open" ? 'closed' : 'open';
//     }, 50);
// }

// handleClick(event: Event): void {
//   const menuIsOpen = this.visible && this.state === 'open';
//   const toggleWasClicked = this.toggle.nativeElement.contains(event.target);
//   const menuWasClicked = this.menu && this.menu.nativeElement.contains(event.target);
//   const pageWasClicked = !toggleWasClicked && !menuWasClicked;
//   const checkOne = (pageWasClicked || toggleWasClicked) && menuIsOpen;

//   const clickedElement = this.ref.nativeElement;
//   const parentElement = (event.target as HTMLElement).parentElement;
//   const checkTwo = !clickedElement.contains(event.target) || clickedElement === parentElement;


//   if (checkOne) { // change this variable between checkOne and checkTwo
//     this.state = 'closed';
//     setTimeout(() => {
//          this.visible = false;
//     }, 500);
//   }
// }
}
