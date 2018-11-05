import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { Playlist } from "../../models/playlist";
import { NgForOfContext, NgForOf } from "@angular/common";

NgForOfContext;
NgForOf;

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated
  // inputs:[
  //   'playlists:items'
  // ]
})
export class ItemsListComponent implements OnInit {
  
  @Input("items")
  playlists: Playlist[] = [];

  selected: Playlist;

  select(playlist: Playlist) {
    this.selected = this.selected == playlist ? null : playlist;
  }

  indexFn(index, item) {
    return item.id;
  }

  constructor() {}

  ngOnInit() {}
}
