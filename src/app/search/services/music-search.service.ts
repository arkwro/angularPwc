import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album } from "src/app/models/album";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SecurityService } from "../../security/security.service";
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
    private security: SecurityService,
    @Inject(SEARCH_API_URL) private search_api_url: string
  ) {}

  albums: Album[] = [
    {
      id: "123",
      name: "Awesome Service Album",
      images: [
        {
          url: "http://placekitten.com/300/300"
        }
      ]
    }
  ];

  getAlbums(query = "batman"): Observable<Album[]> {
    return this.http
      .get<AlbumsResponse>(this.search_api_url, {
        headers: {
          Authorization: `Bearer ${this.security.getToken()}`
        },
        params: {
          type: "album",
          q: query
        }
      })
      .pipe(
        map(resp => resp.albums.items),
        catchError((err, caught) => {
          
          if (err instanceof HttpErrorResponse && err.status == 401) {
            this.security.authorize();
          }
          return throwError(new Error(err.error.error.message));

        })
      );
  }
}

import { Observable, empty, throwError } from "rxjs";
import { pluck, map, catchError, delay } from "rxjs/operators";
