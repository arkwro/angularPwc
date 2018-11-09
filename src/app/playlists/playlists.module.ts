import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaylistsViewComponent } from "./playlists-view/playlists-view.component";
import { ItemsListComponent } from "./items-list/items-list.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { PlaylistDetailsComponent } from "./playlist-details/playlist-details.component";

import { FormsModule /* , DefaultValueAccessor */ } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PlaylistsListComponent } from './containers/playlists-list/playlists-list.component';
import { PlaylistContainerComponent } from './containers/playlist-container/playlist-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PlaylistsViewComponent,
    ItemsListComponent,
    ListItemComponent,
    PlaylistDetailsComponent,
    PlaylistsListComponent,
    PlaylistContainerComponent
  ],
  entryComponents:[PlaylistsViewComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild([])],
  exports: [PlaylistsViewComponent]
})
export class PlaylistsModule {}