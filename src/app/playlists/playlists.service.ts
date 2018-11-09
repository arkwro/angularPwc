import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Playlist } from "../models/playlist";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService {
  constructor() {}

  getPlaylists(): Observable<Playlist[]> {
    
  }
  
  getPlaylist(id:Playlist['id']): Observable<Playlist> {

  }

  savePlaylist(playlist:Playlist): Observable<Playlist>{

  }
}
