import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
 <Button (click)="handleBtnClick()>ClickMe</button>
`,
  styles: [
    `
    button{
        color:red;

    }
     `
  ]
})
export class ButtonComponent {
  @Input('title') title;
  @Input('subtitle') subtitle;
  @Input('content') content = '😄';
  @Output() btnClicked = new EventEmitter<boolean>();
  constructor() {}
}