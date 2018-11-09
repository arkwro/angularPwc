import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-albums-grid',
  templateUrl: './albums-grid.component.html',
  styleUrls: ['./albums-grid.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AlbumsGridComponent implements OnInit {

  @Input()
  albums:Album[]

  constructor() { }

  ngOnInit() {
  }

}
