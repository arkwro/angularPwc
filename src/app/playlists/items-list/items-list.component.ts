import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Playlist } from "../../models/playlist";
import { NgForOfContext, NgForOf } from "@angular/common";

NgForOfContext;
NgForOf;

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemsListComponent implements OnInit {
  playlists: Playlist[] = [
    {
      id: 123,
      name: "Angular Hits",
      favourite: true,
      color: "#ff00ff"
    },
    {
      id: 234,
      name: "Best of Angular ",
      favourite: false,
      color: "#00ffff"
    },
    {
      id: 345,
      name: "Angular Top 20",
      favourite: true,
      color: "#ffff00"
    }
  ];

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
