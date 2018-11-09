import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of } from "rxjs";
import { Playlist } from "../models/playlist";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService {
  constructor() {}

  private playlists = new BehaviorSubject<Playlist[]>([
    {
      id: 123,
      name: "Angular Hits",
      favourite: true,
      color: "#ff00ff"
    },
    {
      id: 234,
      name: "Best of Angular ",
      favourite: false,
      color: "#00ffff"
    },
    {
      id: 345,
      name: "Angular Top 20",
      favourite: true,
      color: "#ffff00"
    }
  ]);

  getPlaylists(): Observable<Playlist[]> {
    return this.playlists.asObservable();
  }

  getPlaylist(id: Playlist["id"]): Observable<Playlist> {
    const playlist = this.playlists.getValue().find(p => p.id == id);

    return of(playlist!);
  }

  savePlaylist(draft: Playlist): Observable<Playlist> {
    let playlists = this.playlists.getValue();
    playlists = playlists.map(p => (p.id == draft.id ? draft : p));

    this.playlists.next(playlists);

    return of(draft);
  }
}
