import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ApplicationRef } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaylistsModule } from "./playlists/playlists.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PlaylistsModule],
  providers: [],
  // entryComponents:[AppComponent]
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private app:ApplicationRef){  }
  // ngDoBootstrap(){
  //   this.app.bootstrap(placki? AppComponent : AwesomeComponent)
  // }
}
