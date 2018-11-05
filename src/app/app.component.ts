import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';


  data = {
    message: 'Placki',
    getMessage(prefix){
      return prefix + ' ' + this.message
    }
  }

  alert(msg){
    alert(msg)
  }
}
