import { Component, OnInit, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.css"]
})
export class TabComponent implements OnInit {
  @Input()
  title:string;

  open = false;

  activeChange= new EventEmitter()

  toggle() {
   this.activeChange.emit()
  }

  constructor() // private tabs: TabsComponent
  {}

  ngOnInit() {}
}
