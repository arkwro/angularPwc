import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective {

  constructor(public tpl:TemplateRef<any>) { }

}
