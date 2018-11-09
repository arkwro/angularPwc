import { Component, OnInit } from "@angular/core";
import { PlaylistsService } from "../../playlists.service";
import { Router } from "@angular/router";
import { Playlist } from "../../../models/playlist";

@Component({
  selector: "app-playlists-list",
  template: `
    <app-items-list
      [items]="playlists$ | async"
      (selectedChange)="select($event)"
    >
    </app-items-list>
  `
})
export class PlaylistsListComponent implements OnInit {
  constructor(private router: Router, private service: PlaylistsService) {}

  playlists$ = this.service.getPlaylists();

  select(playlist: Playlist) {
    this.router.navigate(["/playlists", playlist.id]);
  }

  ngOnInit() {}
}
