import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from "@angular/core";
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

  @Input()
  selected: Playlist;

  @Output()
  selectedChange = new EventEmitter<Playlist>()

  select(playlist: Playlist) {
    this.selectedChange.emit(playlist)
  }

  indexFn(index, item) {
    return item.id;
  }

  constructor() {}

  ngOnInit() {}
}
