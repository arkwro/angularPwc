import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "src/app/models/album";
import { MusicSearchService } from "../services/music-search.service";
import { Observable } from "rxjs";
import { tap, delay } from "rxjs/operators";

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

  ngOnInit() {
    this.withLoading(this.musicSearch.getAlbums().pipe(delay(1500))).subscribe(
      albums => (this.albums = albums),
      error => (this.message = error.message)
    );
  }

  withLoading<T>(obs: Observable<T>) {
    this.loading = true;
    return obs.pipe(
      tap(() => (this.loading = false), () => (this.loading = false))
    );
  }
}
