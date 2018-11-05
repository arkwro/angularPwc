import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaylistsViewComponent } from "./playlists-view/playlists-view.component";
import { ItemsListComponent } from "./items-list/items-list.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { PlaylistDetailsComponent } from "./playlist-details/playlist-details.component";

@NgModule({
  declarations: [
    PlaylistsViewComponent,
    ItemsListComponent,
    ListItemComponent,
    PlaylistDetailsComponent
  ],
  imports: [CommonModule],
  exports: [PlaylistsViewComponent]
})
export class PlaylistsModule {}
