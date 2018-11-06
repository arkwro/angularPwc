import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  active:TabComponent
  tabs: TabComponent[] = []

  toggle(active:TabComponent) {
    this.active = active == this.active? null : active;
    this.tabs.forEach(tab => {
      tab.open = tab == this.active
    })
  }

  register(tab:TabComponent){
    this.tabs.push(tab)
  }

  constructor() { }

  ngOnInit() {
  }

}
