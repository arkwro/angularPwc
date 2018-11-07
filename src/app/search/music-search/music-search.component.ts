import { Component, OnInit } from "@angular/core";
import { Album } from "src/app/models/album";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.css"]
})
export class MusicSearchComponent implements OnInit {
  
  albums: Album[] = [
    {
      id: "123",
      name: "Awesome Album",
      images: [
        {
          url: "http://placekitten.com/300/300"
        }
      ]
    },
  ];

  constructor() {}

  ngOnInit() {}
}
