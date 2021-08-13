import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title= 'training';
  themeText='DARK'
  constructor(private el: ElementRef,private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {

    if(localStorage.getItem('user') === ''){
      console.log("user is",localStorage.getItem("user"))
    }
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

  logout(){
    localStorage.clear();
  }
  login(){
    console.log("in")
    this.router.navigate(['/login'])
  }

  selectedAction(event: any){
    let log = event.target.value;
    // console.log(log);
    if(log == "logout"){
      this.router.navigate(['/login']);
      console.log("logout");
      localStorage.clear();
    }else{
      this.router.navigate(['/login']);
      console.log("login");
    }
  }
}
