import { Component, OnInit, EventEmitter } from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { QueryList } from "@angular/core/src/render3";

@Component({
  selector: "app-tabs-nav",
  templateUrl: "./tabs-nav.component.html",
  styleUrls: ["./tabs-nav.component.css"]
})
export class TabsNavComponent implements OnInit {
  active: TabComponent | null;
  tabs: QueryList<TabComponent>;

  activeChange= new EventEmitter<TabComponent>()

  toggle(tab:TabComponent) {
   this.activeChange.emit(tab)
  }

  constructor() {}

  ngOnInit() {}
}
