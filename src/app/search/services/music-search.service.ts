import {
  Injectable,
  Inject,
  InjectionToken,
  EventEmitter
} from "@angular/core";
import { Album } from "src/app/models/album";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subject, ReplaySubject, BehaviorSubject } from "rxjs";
import { map, concat, startWith, switchMap, switchAll } from "rxjs/operators";

import { AlbumsResponse } from "../../models/album";

export const SEARCH_API_URL = new InjectionToken<string>(
  "Token for search api url"
);

// export abstract class AbstractSearchService {}

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
  constructor(
    private http: HttpClient,
    @Inject(SEARCH_API_URL) private search_api_url: string
  ) {

    this.query$
      .pipe(
        map(query => ({
          type: "album",
          q: query
        })),
        switchMap(params =>
          this.http.get<AlbumsResponse>(this.search_api_url, { params })
        ),
        // switchAll(),
        map(resp => resp.albums.items)
      )
      .subscribe(albums => this.albums$.next(albums));
    // .subscribe(this.albums$)
  }

  albums$ = new BehaviorSubject<Album[]>([]);
  query$ = new BehaviorSubject<string>("batman");
  errors$ = new Subject<Error>();

  search(query: string) {
    this.query$.next(query);
  }

  getAlbums() {
    return this.albums$.asObservable();
  }

  getQuery() {
    return this.query$.asObservable();
  }
}
