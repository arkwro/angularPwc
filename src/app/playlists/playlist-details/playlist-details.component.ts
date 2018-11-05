import { Component, OnInit } from "@angular/core";
import { Playlist } from "../../models/playlist";

enum Modes {
  show,
  hide
}

@Component({
  selector: "app-playlist-details",
  templateUrl: "./playlist-details.component.html",
  styleUrls: ["./playlist-details.component.css"]
})
export class PlaylistDetailsComponent implements OnInit {
  playlist: Playlist = {
    id: 123,
    name: "Angular Hits",
    favourite: true,
    color: "#ff00ff"
  };
  // modes = Modes
  // mode:Modes = Modes.show

  mode: "show" | "edit" = "show";

  edit() {
    this.mode = "edit";
  }

  cancel() {
    this.mode = "show";
  }

  save() {
    console.log("save");
  }

  constructor() {}

  ngOnInit() {}
}
