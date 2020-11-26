import {Component, Input} from '@angular/core';
import { Location } from '@angular/common';
import {SpotifyService} from './spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Temporaire
  pathString = '';

  constructor(private location: Location, spotify: SpotifyService) {
      this.pathString = location.path();
  }

}
