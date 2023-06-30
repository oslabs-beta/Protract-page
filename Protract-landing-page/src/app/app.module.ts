import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './demo/demo.component';
import { FeaturesComponent } from './features/features.component';
import { ProcessComponent } from './process/process.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './team/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoComponent,
    FeaturesComponent,
    ProcessComponent,
    TeamComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
