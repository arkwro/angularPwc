import { Component, OnInit } from "@angular/core";
import { PlaylistsService } from "../../playlists.service";
import { ActivatedRoute } from "@angular/router";
import { map, filter, switchMap, pluck } from "rxjs/operators";
import { Playlist } from "src/app/models/playlist";

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
  ) {
    // console.log(route.snapshot.data)
  }

  playlist = this.route.data.pipe(
    pluck<{}, Playlist>("playlist")
  );

  // playlist = this.route.paramMap.pipe(
  //   map(parmMap => parmMap.get("id")),
  //   filter(id => id !== null),
  //   switchMap(id => {
  //     return this.service.getPlaylist(parseInt(id!, 10));
  //   })
  // );

  ngOnInit() {}
}
