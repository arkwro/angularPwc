import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "src/app/models/album";
import { MusicSearchService } from '../services/music-search.service';
import { Subscription, Subject } from "rxjs";
import { takeUntil, tap, map, catchError } from "rxjs/operators";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.css"],

   viewProviders:[MusicSearchService]
})
export class MusicSearchComponent implements OnInit {
  message = "";
  loading = false;
  albums: Album[];

  query$ = this.musicSearch.getQuery();

  albums$ = this.musicSearch.getAlbums().pipe(
    tap(albums => (this.albums = albums)),
    catchError(error => (this.message = error.message))
  );

  constructor(private musicSearch: MusicSearchService) {}

  search(query: string) {
    this.musicSearch.search(query);
  }

  ngOnInit() {}
}
