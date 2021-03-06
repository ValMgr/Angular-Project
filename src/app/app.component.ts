import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // Temporaire
  pathString = '';
  connected = false;

  constructor(private location: Location) {
      this.pathString = location.path();
      if(sessionStorage['token'] == undefined){
        this.connected = false;
      }
      else{
        this.connected = true;
      }
  }

  ngOnInit(): void {
  }

}
