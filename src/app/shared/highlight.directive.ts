import { Directive, ElementRef, Attribute } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {

  

  constructor(
    @Attribute('color') color,
    elem: ElementRef) {
  
    console.log("hello", elem.nativeElement);

    elem.nativeElement.style.color = color;
  
  }
}
