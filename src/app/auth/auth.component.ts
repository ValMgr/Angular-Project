import {Component, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';  
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
    if(sessionStorage['token'] == undefined){
      this.connected = false;
    }
    else{
      this.connected = true
    }
  }


}
