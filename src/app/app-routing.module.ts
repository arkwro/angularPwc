import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MusicSearchComponent } from "./search/music-search/music-search.component";
import { PlaylistResolveService } from "./playlists/services/playlist-resolve.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "playlists",
    pathMatch: "full" //'prefix'
  },
  // ... playlist
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
      paramsInheritanceStrategy: "emptyOnly"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
