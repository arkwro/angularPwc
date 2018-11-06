import { Directive, ElementRef, Attribute, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {

  @Input()
  appHighlight;

  constructor(private elem: ElementRef, private renderer:Renderer2) {}

  ngOnInit() {
    console.log("hello", this.appHighlight);

    this.renderer.setStyle(this.elem.nativeElement,'color',this.appHighlight)

    // this.elem.nativeElement.style.color = this.appHighlight;
  }
}
