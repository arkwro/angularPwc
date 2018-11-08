import {
  Injectable,
  Inject,
  InjectionToken,
  EventEmitter
} from "@angular/core";
import { Album } from "src/app/models/album";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subject, ReplaySubject, BehaviorSubject } from "rxjs";
import { map, concat, startWith } from "rxjs/operators";

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
  ) {}

  albums$ = new BehaviorSubject<Album[]>([]);

  search(query: string) {
    this.http
      .get<AlbumsResponse>(this.search_api_url, {
        params: {
          type: "album",
          q: query
        }
      })
      .pipe(map(resp => resp.albums.items))
      .subscribe(albums => {
        this.albums$.next(albums);
      });
  }

  getAlbums() {
    return this.albums$;
  }
}
