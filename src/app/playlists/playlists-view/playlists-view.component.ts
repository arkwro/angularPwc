import { Component, OnInit } from "@angular/core";
import { Playlist } from "../../models/playlist";

@Component({
  selector: "app-playlists-view",
  templateUrl: "./playlists-view.component.html",
  styleUrls: ["./playlists-view.component.css"]
})
export class PlaylistsViewComponent implements OnInit {
  playlists: Playlist[] = [];

  selected: Playlist | null;

  select(playlist: Playlist) {
    this.selected = this.selected == playlist ? null : playlist;
  }

  savePlaylist(draft: Playlist) {
    // Mutable:
    const index = this.playlists.findIndex(p => p.id == draft.id);
    if (index !== -1) {
      this.playlists.splice(index, 1, draft);
      this.selected = draft;
    }

    // Immutable:
    // this.playlists = this.playlists.map(p => (p.id == draft.id ? draft : p));
  }

  constructor() {}

  ngOnInit() {}
}
