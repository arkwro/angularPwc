import { Directive, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { PlaylistsViewComponent } from "../playlists/playlists-view/playlists-view.component";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  constructor(
    private fr: ComponentFactoryResolver,
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {
    const f = fr.resolveComponentFactory(PlaylistsViewComponent);
    this.vcr.createComponent(f);

    console.log("hello unless");
  }
}
