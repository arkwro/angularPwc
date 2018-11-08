import { Directive, Input } from "@angular/core";
import { MusicSearchService } from "./services/music-search.service";

@Directive({
  selector: "[appSearchProvider]",
  providers: [MusicSearchService]
})
export class SearchProviderDirective {
  @Input()
  config: any;

  constructor(private service: MusicSearchService) {}
}
