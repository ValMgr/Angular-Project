import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';


@Component({
  selector: 'app-track-top',
  templateUrl: './track-top.component.html',
  styleUrls: ['./track-top.component.scss']
})
export class TrackTopComponent implements OnInit {
  constructor(private spotify: SpotifyService){

   }

  track = {
    name: "",
    cover: "",
  }

  ngOnInit(): void {
    this.spotify.getTopTrack(sessionStorage['token']).subscribe(data =>{
      console.log(data.items[0])
      this.track.name = data.items[0].name
      this.track.cover = data.items[0].album.images[0].url
    })
  }

}
