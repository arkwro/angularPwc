import { SimpleChanges } from '@angular/core';
import {
  Directive,
  ElementRef
  Input,
  Renderer2,
  OnChanges,
  DoCheck
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  // host:{
  //   '[style.borderLeftColor]':'appHighlight',
  //   '(mouseenter)':'activate($event)'
  // }
})
export class HighlightDirective implements OnChanges, DoCheck {
  @Input()
  appHighlight;

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes:SimpleChanges) {
    // console.log("ngOnChange",changes);
    this.renderer.setStyle(this.elem.nativeElement, "color", this.appHighlight);
  }
  
  ngDoCheck() {
    // console.log("ngDoCheck");
  }

  ngOnInit() {
    // console.log("hello", this.appHighlight);
  }

  ngOnDestroy(){

  }
}
