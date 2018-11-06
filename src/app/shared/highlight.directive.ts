import { Input } from "@angular/core";
import {
  SimpleChanges,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  Directive,
  ElementRef,
  Renderer2,
  OnChanges,
  DoCheck
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
  // host:{
  //   '[style.borderLeftColor]':'appHighlight',
  //   '(mouseenter)':'activate($event)'
  // }
})
export class HighlightDirective {
  @Input()
  appHighlight;
  
  @HostBinding("style.color")
  currentColor

  hover = false;

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter", ["$event.x", "$event.y"])
  activate(x: number, y: number) {
    this.hover = true;
  }
  
  @HostListener("mouseleave")
  deactivate(x: number, y: number) {
    this.hover = false;
  }

  ngDoCheck(){
    // this.renderer.setStyle(this.elem.nativeElement, "color", this.hover ? this.appHighlight : '');
  }
}
