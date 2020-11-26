import {Component, OnInit, Output} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  connected = false;
  authUrl = '';
  constructor(private spotify: SpotifyService) {
    this.authUrl = spotify.getAuthUrl();
  }

  ngOnInit(): void {
    this.spotify.sharedConnected.subscribe(connected => this.connected = connected);
  }


}
