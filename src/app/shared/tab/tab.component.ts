import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input()
  title

  open = false

  toggle(){
    this.tabs.toggle(this)
  }

  constructor(
    private tabs: TabsComponent
  ) { 
    tabs.register(this)
  }

  ngOnInit() {

  }

}
