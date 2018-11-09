import { Component, OnInit } from "@angular/core";
import { PlaylistsService } from "../../playlists.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Playlist } from "../../../models/playlist";
import { map, filter, switchMap } from "rxjs/operators";

@Component({
  selector: "app-playlists-list",
  template: `
    <app-items-list
      [items]="playlists$ | async"
      [selected]="selected$ | async"
      (selectedChange)="select($event)"
    >
    </app-items-list>
  `
})
export class PlaylistsListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PlaylistsService
  ) {}

  playlists$ = this.service.getPlaylists();

  selected$ = this.route.firstChild!.paramMap.pipe(
    map(parmMap => parmMap.get("id")),
    filter(id => id !== null),
    switchMap(id => {
      return this.service.getPlaylist(parseInt(id!, 10));
    })
  );

  select(playlist: Playlist) {
    this.router.navigate(["/playlists", playlist.id]);
  }

  ngOnInit() {}
}
