import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album } from "src/app/models/album";
import { HttpClient } from "@angular/common/http";
import { SecurityService } from "../../security/security.service";

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

  getAlbums() {
    this.http.get(this.search_api_url, {
      headers: {
        Authorization: "Bearer " + this.security.getToken()
      },
      params: {
        type: "album",
        q: "batman"
      }
      // reportProgress: true,
      // responseType:'arraybuffer',
      // observe:'response',
    });

    return this.albums;
  }
}
