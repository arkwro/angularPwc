import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-album-card, [app-album-card]",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  
  @HostBinding("class.card")
  cardClass = true;

  constructor() {}

  ngOnInit() {}
}
