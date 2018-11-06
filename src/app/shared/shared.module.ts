import { NgModule } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";
import { ValidateDirective } from "./validate.directive";
import { UnlessDirective } from "./unless.directive";
import { CardComponent } from "./card/card.component";
import { TabsComponent } from "./tabs/tabs.component";
import { TabComponent } from "./tab/tab.component";
import { CommonModule } from '@angular/common';
import { TabsNavComponent } from './tabs-nav/tabs-nav.component';
import { TabDirective } from './tab.directive';
import { TabsDirective } from './tabs.directive';

// ng g m shared -m playlists
// ng g d shared/highlight -m shared --export true

@NgModule({
  imports:[
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    ValidateDirective,
    UnlessDirective,
    CardComponent,
    TabsComponent,
    TabComponent,
    TabsNavComponent,
    TabDirective,
    TabsDirective
  ],
  exports: [
    HighlightDirective,
    ValidateDirective,
    UnlessDirective,
    CardComponent,
    TabsComponent,
    TabComponent,
    TabsNavComponent,
    TabDirective,
    TabsDirective
  ]
})
export class SharedModule {}
