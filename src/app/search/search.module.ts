import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MusicSearchComponent } from "./music-search/music-search.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { AlbumsGridComponent } from "./albums-grid/albums-grid.component";
import { AlbumCardComponent } from "./album-card/album-card.component";
import { environment } from "src/environments/environment";
import { SEARCH_API_URL } from './services/music-search.service';

@NgModule({
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumsGridComponent,
    AlbumCardComponent
  ],
  imports: [CommonModule],
  exports: [MusicSearchComponent],
  providers: [
    {
      provide: SEARCH_API_URL,
      useValue: environment.search_api_url
    }
  ]
})
export class SearchModule {}
