import { Component, OnInit } from "@angular/core";
import { Playlist } from "../../models/playlist";

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

  constructor() {}

  ngOnInit() {}
}