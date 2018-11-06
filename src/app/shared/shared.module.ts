import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

// ng g m shared -m playlists
// ng g d shared/highlight -m shared --export true

@NgModule({
  declarations: [HighlightDirective],
  exports: [HighlightDirective]
})
export class SharedModule { }
