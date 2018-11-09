import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MusicSearchComponent } from "./music-search/music-search.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { AlbumsGridComponent } from "./albums-grid/albums-grid.component";
import { AlbumCardComponent } from "./album-card/album-card.component";
import { environment } from "src/environments/environment";
import {
  SEARCH_API_URL,
  MusicSearchService
} from "./services/music-search.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchProviderDirective } from './search-provider.directive';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, SharedModule],
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumsGridComponent,
    AlbumCardComponent,
    SearchProviderDirective
  ],
  exports: [MusicSearchComponent, SearchProviderDirective],
  providers: [
    {
      provide: SEARCH_API_URL,
      useValue: environment.search_api_url
    }
    /* {
      provide: MusicSearchService,
      useFactory: (api_url: string) => {
        return new MusicSearchService(api_url);
      },
      deps: [SEARCH_API_URL]
    }, */
    // {
    //   provide: AbstractSearchService,
    //   useClass: MusicSearchService,
    //   // deps: [SEARCH_API_URL]
    // },
    // {
    //   provide: MusicSearchService,
    //   useClass: MusicSearchService
    // },
    // MusicSearchService
  ]
})
export class SearchModule {
  static forRoot(options: { search_api_url: string }): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [
        {
          provide: SEARCH_API_URL,
          useValue: options.search_api_url
        }
      ]
    };
  }
}
