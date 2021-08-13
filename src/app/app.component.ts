import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title= 'training';
  themeText='DARK'
  constructor(private el: ElementRef,private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  toggleTheme() {
    //INCOMPLETE NEEDS IMPROVEMENTS
    if(this.themeText == 'DARK'){
      this.themeText = "LIGHT";
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'black');
      // this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'color', 'white');

      // this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    }else{
      this.themeText = "DARK";
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'white');

    }
  }

}
