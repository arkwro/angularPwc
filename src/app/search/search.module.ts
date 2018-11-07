import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MusicSearchComponent } from "./music-search/music-search.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { AlbumsGridComponent } from "./albums-grid/albums-grid.component";
import { AlbumCardComponent } from "./album-card/album-card.component";

@NgModule({
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumsGridComponent,
    AlbumCardComponent
  ],
  imports: [CommonModule],
  exports: [MusicSearchComponent]
})
export class SearchModule {}
