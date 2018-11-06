import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Playlist } from "../../models/playlist";
import { NgForm } from "@angular/forms";

enum Modes {
  show,
  hide
}

@Component({
  selector: "app-playlist-details",
  templateUrl: "./playlist-details.component.html",
  styleUrls: ["./playlist-details.component.css"]
})
export class PlaylistDetailsComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.playlist.currentValue !== changes.playlist.previousValue) {
      this.mode = "show";
    }
  }

  @Input()
  playlist: Playlist;

  mode: "show" | "edit" = "show";

  edit() {
    this.mode = "edit";
  }

  cancel() {
    this.mode = "show";
  }

  @Output()
  playlistChange = new EventEmitter<Playlist>();

  save(form: NgForm) {
    const draft: Pick<Playlist, "name" | "favourite" | "color"> = form.value;

    const playlist: Playlist = {
      ...this.playlist,
      ...draft
    };
    this.playlistChange.emit(playlist);
  }

  constructor() {}

  ngOnInit() {}
}

// type PartialPlaylist = {
//   [k in keyof Playlist]?: Playlist[k]
// }

// type Partial<T> = {
//   [k in keyof T]?: T[k]
// }

// type PartialPlaylist = Pick<Playlist, "name" | "favourite" | "color">;

// type ExcludedPlaylist = Exclude<PartialPlaylist,Playlist>
