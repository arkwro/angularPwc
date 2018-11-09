import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ApplicationRef } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaylistsModule } from "./playlists/playlists.module";
import { SharedModule } from "./shared/shared.module";
// import { SearchModule } from "./search/search.module";
import { environment } from "src/environments/environment";
import { SecurityModule } from "./security/security.module";
import { SecurityService } from "./security/security.service";
import { HttpClientModule } from "@angular/common/http";
import { TestingComponent } from "./testing/testing.component";

import { ServiceWorkerModule } from "@angular/service-worker";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TestingComponent],
  imports: [
    // environment.production?
    ServiceWorkerModule.register("ngsw-worker.js"),
    // : [],
    FormsModule,
    BrowserModule,
    PlaylistsModule,
    SharedModule,
    HttpClientModule,
    // SearchModule,
    SecurityModule.forRoot(environment.auth_config),
    AppRoutingModule
  ],
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
