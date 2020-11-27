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
    name: " ",
    image: "",
  }

  ngOnInit(): void {
    this.spotify.getTopArtist(sessionStorage['token']).subscribe(data =>{
      console.log(data.items[0])
      this.artist.name = data.items[0].name
      this.artist.image = data.items[0].images[0].url
    })
  }

}
