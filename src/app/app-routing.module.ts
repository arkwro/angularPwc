import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistsViewComponent } from "./playlists/playlists-view/playlists-view.component";
import { MusicSearchComponent } from "./search/music-search/music-search.component";
import { PlaylistContainerComponent } from "./playlists/containers/playlist-container/playlist-container.component";
import { PlaylistResolveService } from './playlists/services/playlist-resolve.service';

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
        path: ":id",
        component: PlaylistContainerComponent,
        data: {
          title: "placki"
        },
        resolve:{
          playlist: PlaylistResolveService
        }
      }
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
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true
      // onSameUrlNavigation:'ignore',
      // paramsInheritanceStrategy:'always',
      // useHash: true
    })
  ],
  providers:[
    PlaylistResolveService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
