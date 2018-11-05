import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaylistsViewComponent } from "./playlists-view/playlists-view.component";
import { ItemsListComponent } from "./items-list/items-list.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { PlaylistDetailsComponent } from "./playlist-details/playlist-details.component";

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    PlaylistsViewComponent,
    ItemsListComponent,
    ListItemComponent,
    PlaylistDetailsComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [PlaylistsViewComponent]
})
export class PlaylistsModule {}
