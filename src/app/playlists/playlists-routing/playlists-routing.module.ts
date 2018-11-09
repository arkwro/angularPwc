import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PlaylistsViewComponent } from "../playlists-view/playlists-view.component";
import { PlaylistsListComponent } from "../containers/playlists-list/playlists-list.component";
import { PlaylistResolveService } from "../services/playlist-resolve.service";
import { PlaylistContainerComponent } from "../containers/playlist-container/playlist-container.component";

const routes: Routes = [
  {
    path: "playlists",
    component: PlaylistsViewComponent,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            component: PlaylistsListComponent,
            outlet: "list"
          }
        ]
      },
      {
        path: ":id",
        resolve: {
          playlist: PlaylistResolveService
        },
        children: [
          {
            path: "",
            component: PlaylistsListComponent,
            outlet: "list"
          },
          {
            path: "",
            component: PlaylistContainerComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PlaylistResolveService]
})
export class PlaylistsRoutingModule {}
