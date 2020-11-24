import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistTopComponent } from './artist-top/artist-top.component';
import { TrackTopComponent } from './track-top/track-top.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'artist', component: ArtistTopComponent },
  { path: 'track', component: TrackTopComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
