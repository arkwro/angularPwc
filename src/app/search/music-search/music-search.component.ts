import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "src/app/models/album";
import { MusicSearchService } from "../services/music-search.service";
import { Subscription, Subject } from "rxjs";
import { takeUntil, tap, map, catchError } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.css"]
  // viewProviders: [MusicSearchService]
})
export class MusicSearchComponent implements OnInit {
  message = "";
  loading = false;
  albums: Album[];

  // query$ = this.musicSearch.getQuery();

  query$ = this.route.queryParamMap.pipe(
    map(paramMap => paramMap.get("query")),
    tap((query: string) => this.musicSearch.search(query))
  );

  albums$ = this.musicSearch.getAlbums().pipe(
    tap(albums => (this.albums = albums)),
    catchError(error => (this.message = error.message))
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private musicSearch: MusicSearchService
  ) {}

  ngOnInit() {
    // const query = this.route.snapshot.queryParamMap.get("query");
    // this.route.queryParamMap
    //   .pipe(map(paramMap => paramMap.get("query")))
    //   .subscribe(query => {
    //     if (query) {
    //       this.musicSearch.search(query);
    //     }
    //   });
  }

  search(query: string) {
    this.musicSearch.search(query);

    this.router.navigate(
      [
        /* "/search" or relativeTo:true */
      ],
      {
        queryParams: {
          query //:query
        },
        // replaceUrl: true,
        relativeTo: this.route
      }
    );
  }
}
