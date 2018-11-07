import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewRef
} from "@angular/core";
import { PlaylistsViewComponent } from "../playlists/playlists-view/playlists-view.component";
import { Input } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {

  viewCache:ViewRef | null

  @Input()
  set appUnless(hide:boolean) {
    if (hide) {
      // this.vcr.clear()
      this.viewCache = this.vcr.detach(0)

    } else {
     
      if(this.viewCache){
        this.vcr.insert(this.viewCache,0)
      }else{
        this.vcr.createEmbeddedView(this.tpl, {
          $implicit: "Placki",
          message: "Awesome"
        });
      }
    }
  }

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {
    console.log("hello unless");
  }
}
