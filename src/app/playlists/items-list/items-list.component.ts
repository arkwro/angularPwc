import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
