import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Playlist } from "src/app/models/playlist";
import { PlaylistsService } from "../playlists.service";

@Injectable({
  providedIn: "root"
})
export class PlaylistResolveService implements Resolve<Playlist> {
  constructor(private service: PlaylistsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const param = route.paramMap.get("id")!;

    // if (param) {
    const id = parseInt(param, 10);

    return this.service.getPlaylist(id);
    // }
  }
}
