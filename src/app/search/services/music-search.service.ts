import {
  Injectable,
  Inject,
  InjectionToken,
  EventEmitter
} from "@angular/core";
import { Album } from "src/app/models/album";
import { HttpClient } from "@angular/common/http";
import {
  Observable,
  of,
  Subject,
  ReplaySubject,
  BehaviorSubject,
  empty
} from "rxjs";
import {
  map,
  concat,
  startWith,
  switchMap,
  switchAll,
  catchError,
  debounceTime,
  filter,
  distinctUntilChanged
} from "rxjs/operators";

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
    const myOperator = (obs: Observable<string>) =>
      obs.pipe(
        debounceTime(400),
        filter(query => query.length >= 3),
        distinctUntilChanged()
      );

    this.query$
      .pipe(
        myOperator,
        map(query => ({
          type: "album",
          q: query
        })),
        switchMap(params =>
          this.http.get<AlbumsResponse>(this.search_api_url, { params }).pipe(
            catchError(err => {
              this.errors$.next(err);
              return empty();
            })
          )
        ),
        map(resp => resp.albums.items)
      )
      .subscribe(albums => this.albums$.next(albums));
  }

  albums$ = new BehaviorSubject<Album[]>([]);
  query$ = new BehaviorSubject<string>("alice");
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

  ngOnDestroy() {
    // when in viewProviders/Providers
  }
}
