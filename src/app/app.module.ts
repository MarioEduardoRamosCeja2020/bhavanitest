import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitlesComponent } from './titles/titles.component';
import { CirclesComponent } from './circles/circles.component';
import { TitleButtonComponent } from './title-button/title-button.component';
import { BhavanichallengeComponent } from './bhavanichallenge/bhavanichallenge.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    CirclesComponent,
    TitleButtonComponent,
    BhavanichallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
