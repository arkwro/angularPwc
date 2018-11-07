import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album } from "src/app/models/album";
import { HttpClient } from "@angular/common/http";
import { SecurityService } from "../../security/security.service";
import { AlbumsResponse } from '../../models/album';

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

  getAlbums(query = "batman") {

    this.http.get<AlbumsResponse>(this.search_api_url, {
      headers: {
        Authorization: `Bearer ${this.security.getToken()}`
      },
      params: {
        type: "album",
        q: query
      }
    })
    .subscribe(resp=>{
      console.log(resp.albums.items)
    })

    return this.albums;
  }
}
