import { NgModule } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";
import { ValidateDirective } from "./validate.directive";
import { UnlessDirective } from "./unless.directive";
import { CardComponent } from './card/card.component';

// ng g m shared -m playlists
// ng g d shared/highlight -m shared --export true

@NgModule({
  declarations: [HighlightDirective, ValidateDirective, UnlessDirective, CardComponent],
  exports: [HighlightDirective, ValidateDirective, UnlessDirective, CardComponent]
})
export class SharedModule {}
