import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "src/app/models/album";
import { MusicSearchService } from "../services/music-search.service";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.css"]
})
export class MusicSearchComponent implements OnInit {
  albums: Album[];
  message = "";

  constructor(private musicSearch: MusicSearchService) {}


  ngOnInit() {
    this.musicSearch
      .getAlbums()
      .subscribe(
        albums => (this.albums = albums),
        error => (this.message = error.message)
      );
  }
}
