import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { PlaylistsViewComponent } from "../playlists/playlists-view/playlists-view.component";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {

    
    this.vcr.createEmbeddedView(this.tpl, {
      $implicit: "Placki",
      message: "Awesome"
    });

    console.log("hello unless");
  }
}
