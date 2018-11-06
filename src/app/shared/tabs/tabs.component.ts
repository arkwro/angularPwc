import {
  Component,
  OnInit,
  ViewChild,
  ContentChildren,
  QueryList
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { TabsNavComponent } from "../tabs-nav/tabs-nav.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
  // queries:{
  //   'nav':'navRef'
  // }
})
export class TabsComponent implements OnInit {
  @ViewChild("navRef")
  nav: TabsNavComponent;

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  active: TabComponent;

  ngAfterContentInit() {
    this.tabs.forEach(tab => {
      tab.activeChange.subscribe(() => {
        this.toggle(tab)
      });
    });
  }

  ngAfterViewInit() {
    this.nav.activeChange.subscribe(tab=>{
      this.toggle(tab)
    })

    // ExpressionChangedAfterItHasBeenCheckedError: ;-)
    setTimeout(()=>{
      this.nav.tabs = this.tabs;
    })
  }

  constructor() {}

  ngOnInit() {}

  toggle(active: TabComponent) {
    this.active = active == this.active ? null : active;
    this.tabs.forEach(tab => {
      tab.open = tab == this.active;
    });
    this.nav.active = this.active
  }
}
