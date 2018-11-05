import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  title = "Hello Angular";

  counter = 0;

  constructor() {

    setInterval(()=>{

        this.counter++;

    },500)    
    // console.log(this)
  }
}
