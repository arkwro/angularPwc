import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album } from "src/app/models/album";

export const SEARCH_API_URL = new InjectionToken<string>(
  "Token for search api url"
);

// export abstract class AbstractSearchService {}

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
  constructor(@Inject(SEARCH_API_URL) private search_api_url: string) {}

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
    return this.albums;
  }
}
