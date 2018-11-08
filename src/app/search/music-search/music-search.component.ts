import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "src/app/models/album";
import { MusicSearchService } from "../services/music-search.service";
import { Subscription, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

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
    this.musicSearch
      .getAlbums()
      .pipe(takeUntil(this.destory))
      .subscribe(
        albums => (this.albums = albums),
        error => (this.message = error.message)
      );
  }
  destory = new Subject();

  ngOnDestroy() {
    this.destory.next();
  }
}
