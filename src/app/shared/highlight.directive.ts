import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {

  constructor(elem: ElementRef) {
  
    console.log("hello", elem.nativeElement);

    elem.nativeElement.style.color = "red";
  
  }
}
