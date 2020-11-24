import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistTopComponent } from './artist-top/artist-top.component';
import { TrackTopComponent } from './track-top/track-top.component';
import {AuthComponent} from './auth/auth.component';
import {CallbackComponent} from './callback/callback.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArtistTopComponent,
    TrackTopComponent,
    AuthComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
