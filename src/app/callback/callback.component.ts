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
  topArtist: any;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRoute.queryParams.subscribe(paramsId => {
      this.code = paramsId.code;
    });
  }

  ngOnInit(): void {
    this.spotify.getToken(this.code).subscribe(data => {
      this.spotify.getTopArtist(data.access_token).subscribe(topArtistData => {
        this.topArtist = topArtistData;
      });
    });
  }

}
