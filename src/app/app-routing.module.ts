import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistsViewComponent } from "./playlists/playlists-view/playlists-view.component";
import { MusicSearchComponent } from "./search/music-search/music-search.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "playlists",
    pathMatch: "full" //'prefix'
  },
  {
    path: "playlists",
    component: PlaylistsViewComponent
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
      enableTracing: true,
      // onSameUrlNavigation:'ignore',
      // paramsInheritanceStrategy:'always',
      // useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
