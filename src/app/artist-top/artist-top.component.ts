import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';


@Component({
  selector: 'app-artist-top',
  templateUrl: './artist-top.component.html',
  styleUrls: ['./artist-top.component.scss']
})
export class ArtistTopComponent implements OnInit {
  constructor(private spotify: SpotifyService) {
  }

  artist = {
    name: "John Doe",
    image: "https://i.scdn.co/image/d32577a62624c8d348fede3052fca8c3dd9707ae",
  }

  ngOnInit(): void {
    this.spotify.getTopArtist(sessionStorage['token']).subscribe(data =>{
      console.log(data)
    })
  }

}
