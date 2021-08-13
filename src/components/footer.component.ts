import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'app-footer',
    template:`

    <footer>
    <div class="container1">
      <div class="ftr">
        <h3  class="company">Company</h3>
        <ul class="fcontent">              
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div class="ftr">  
        <h3 class="policies">Policies</h3>
        <ul class="fcontent">              
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Copyright policy</a></li>
        </ul>
      </div>
      <div class="ftr">  
        <h3 class="help">Help</h3>
        <ul class="fcontent">              
          <li><a href="">Shiping</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </div>
    </div>
  </footer>

    `,
    styleUrls:['./footer.component.scss'],
})

export class footerComponent{

}