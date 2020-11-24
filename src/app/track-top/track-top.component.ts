import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-top',
  templateUrl: './track-top.component.html',
  styleUrls: ['./track-top.component.scss']
})
export class TrackTopComponent implements OnInit {

  constructor() { }

  track = {
    name: "13 Block - Sablier",
    cover: "https://i.scdn.co/image/ab67616d00001e023c64c9c5faee7ffbcd8ec1f5",
  }

  ngOnInit(): void {
  }

}
