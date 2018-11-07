import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Album } from "src/app/models/album";

@Component({
  selector: "app-album-card, [app-album-card]",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {

  @Input()
  album:Album
  
  @HostBinding("class.card")
  cardClass = true;

  constructor() {}

  ngOnInit() {}
}
