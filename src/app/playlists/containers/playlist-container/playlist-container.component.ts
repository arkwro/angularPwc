import { Component, OnInit } from "@angular/core";
import { PlaylistsService } from "../../playlists.service";
import { ActivatedRoute } from "@angular/router";
import { map, filter, switchMap } from "rxjs/operators";

@Component({
  selector: "app-playlist-container",
  template: `
    <app-playlist-details [playlist]="playlist | async"> </app-playlist-details>
  `
})
export class PlaylistContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: PlaylistsService
  ) {}

  playlist = this.route.paramMap.pipe(
    map(parmMap => parmMap.get("id")),
    filter(id => id !== null),
    switchMap(id => {
      return this.service.getPlaylist(parseInt(id!, 10));
    })
  );

  ngOnInit() {}
}
