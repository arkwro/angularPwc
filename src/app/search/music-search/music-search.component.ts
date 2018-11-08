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
  message = "";
  loading = false;

  albums$ = this.musicSearch.getAlbums();

  constructor(private musicSearch: MusicSearchService) {}

  search(query: string) {
    this.musicSearch.search(query);
  }

  ngOnInit() {}
}
