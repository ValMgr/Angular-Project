import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  connected = false;
  constructor(private spotify: SpotifyService) {
  }

  ngOnInit(): void {
    this.spotify.sharedConnected.subscribe(connected => this.connected = connected);
  }

}
