import {Component, OnInit, Output} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private spotify: SpotifyService) { }
  authUrl = this.spotify.getAuthUrl();

  ngOnInit(): void {
  }


}
