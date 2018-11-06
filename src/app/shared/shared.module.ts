import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ValidateDirective } from './validate.directive';

// ng g m shared -m playlists
// ng g d shared/highlight -m shared --export true

@NgModule({
  declarations: [HighlightDirective, ValidateDirective],
  exports: [HighlightDirective, ValidateDirective]
})
export class SharedModule { }
