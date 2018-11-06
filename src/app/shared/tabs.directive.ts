import {
  Directive,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { TabDirective } from "./tab.directive";
import { Component } from "@angular/core";
import { NgForOf } from "@angular/common";
NgForOf;
@Component({
  selector: "[appTabs]",
  template: `
    <div>
      <div *ngFor="let tab of [1,2,3] template tabs.first.tpl"></div>
    </div>
  `
})
export class TabsDirective {
  @ContentChildren(TabDirective, {
    // read: TemplateRef
  })
  tabs: QueryList<TabDirective>;

  ngAfterContentInit() {
    console.log(this);

    // this.tabs.forEach(tab => {
    //   this.vcr.createEmbeddedView(tab.tpl, {}, this.vcr.length);
    // });
  }

  constructor(private vcr: ViewContainerRef) {}
}
