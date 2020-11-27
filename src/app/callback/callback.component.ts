import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  code: any;
  token: any;
  connected = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private spotify: SpotifyService) {
    this.activatedRoute.queryParams.subscribe(paramsId => {
      this.code = paramsId.code;
      this.connected = true;

    });
  }

  ngOnInit(): void {
    this.spotify.getToken(this.code).subscribe(token => {
      this.token = token.access_token;
      sessionStorage['token'] = token.access_token;
      //this.router.navigate(['./'])
    });
  }

}
