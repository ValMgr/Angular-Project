import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';


@Component({
  selector: 'app-artist-top',
  templateUrl: './artist-top.component.html',
  styleUrls: ['./artist-top.component.scss']
})
export class ArtistTopComponent implements OnInit {
  data;

  constructor(private spotify: SpotifyService) {
    this.data = spotify.getTopArtist(sessionStorage['token']);
  }

  artist = {
    name: "John Doe",
    image: "https://i.scdn.co/image/d32577a62624c8d348fede3052fca8c3dd9707ae",
  }

  ngOnInit(): void {
    console.log(this.data.subscribe())
  }

}
