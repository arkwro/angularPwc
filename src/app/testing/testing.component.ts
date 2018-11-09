import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.css"]
})
export class TestingComponent implements OnInit {
  message = "testing works!";

  constructor() {}

  ngOnInit() {}

  @Output()
  messageChange = new EventEmitter<string>()

  save(message:string){
    this.messageChange.emit(message)
  }
}
