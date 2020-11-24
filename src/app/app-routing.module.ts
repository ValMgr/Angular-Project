import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistTopComponent } from './artist-top/artist-top.component';
import { TrackTopComponent } from './track-top/track-top.component';
import {AuthComponent} from './auth/auth.component';
import {CallbackComponent} from './callback/callback.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'artist', component: ArtistTopComponent },
  { path: 'track', component: TrackTopComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
