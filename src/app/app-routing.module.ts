import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistsViewComponent } from "./playlists/playlists-view/playlists-view.component";
import { MusicSearchComponent } from "./search/music-search/music-search.component";
import { PlaylistContainerComponent } from "./playlists/containers/playlist-container/playlist-container.component";
import { PlaylistResolveService } from "./playlists/services/playlist-resolve.service";
import { PlaylistsListComponent } from "./playlists/containers/playlists-list/playlists-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "playlists",
    pathMatch: "full" //'prefix'
  },
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
            component: PlaylistContainerComponent,
            
          }
        ]
      }

      /*   {
        path: "",
        component: PlaylistsListComponent,
        outlet: "list"
      },
      // {
      //   path:'',
      //   component: MessageComponent,
      //   data: {message:'Please Select Playlist'}
      // },
      {
        path: ":id",
        component: PlaylistContainerComponent,
        // outlet:'primary',
        // data: {
        //   title: "placki"
        // },
        resolve: {
          playlist: PlaylistResolveService
        }
      } */
    ]
  },
  {
    path: "search",
    component: MusicSearchComponent
  },
  {
    path: "**",
    redirectTo: "search",
    pathMatch: "full" //'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy:'emptyOnly'
  })],
  providers: [PlaylistResolveService],
  exports: [RouterModule]
})
export class AppRoutingModule {}
