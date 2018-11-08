import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "src/app/models/album";
import { MusicSearchService } from "../services/music-search.service";
import { Subscription, Subject } from "rxjs";
import { takeUntil, tap, map } from "rxjs/operators";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.css"]
})
export class MusicSearchComponent implements OnInit {
  message = "";
  loading = false;

  albums: Album[];

  albums$ = this.musicSearch.getAlbums().pipe(
    // tap(albums => console.log(albums)),
    // map(albums => albums.slice(5,10)),
    tap(albums => (this.albums = albums))
  );

  constructor(private musicSearch: MusicSearchService) {}

  search(query: string) {
    this.musicSearch.search(query);
  }

  ngOnInit() {}
}
