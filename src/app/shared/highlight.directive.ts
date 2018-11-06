import { Directive, ElementRef, Attribute, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  
  @Input()
  appHighlight;

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    console.log("hello", this.appHighlight);

    this.elem.nativeElement.style.color = this.appHighlight;
  }
}
