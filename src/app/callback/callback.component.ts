import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  code: any;
  token: any;
  topArtist: any;
  connected = false;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRoute.queryParams.subscribe(paramsId => {
      this.code = paramsId.code;
    });
  }

  ngOnInit(): void {
    this.spotify.sharedConnected.subscribe(connected => this.connected = connected);
    this.spotify.setConnected(true);
  }

}
