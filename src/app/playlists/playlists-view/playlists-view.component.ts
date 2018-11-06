import { Component, OnInit } from "@angular/core";
import { Playlist } from "../../models/playlist";

@Component({
  selector: "app-playlists-view",
  templateUrl: "./playlists-view.component.html",
  styleUrls: ["./playlists-view.component.css"]
})
export class PlaylistsViewComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
