import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TestingServiceService } from "../testing-service.service";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.css"]
})
export class TestingComponent implements OnInit {
  @Input()
  message = "testing works!";

  constructor(private service: TestingServiceService) {}

  ngOnInit() {}
  fetchMessge() {
    this.service.fetchMessage().subscribe(msg => {
      this.message = msg;
    });
  }

  @Output()
  messageChange = new EventEmitter<string>();

  save(message: string) {
    this.messageChange.emit(message);
  }
}
