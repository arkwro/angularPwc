import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "src/app/models/album";
import { MusicSearchService } from "../services/music-search.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.css"]
})
export class MusicSearchComponent implements OnInit {
  albums: Album[];
  message = "";
  loading = false;

  constructor(private musicSearch: MusicSearchService) {}

  search(query: string) {
    this.musicSearch.search(query);
  }

  ngOnInit() {
    this.sub = this.musicSearch
      .getAlbums()
      .subscribe(
        albums => (this.albums = albums),
        error => (this.message = error.message)
      );
  }
  sub: Subscription

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
