import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistTopComponent } from './artist-top/artist-top.component';
import { TrackTopComponent } from './track-top/track-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistTopComponent,
    TrackTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
