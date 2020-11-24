import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // Temporaire
  connected = true;
  pathString = ''

  constructor(private location: Location) { 
      this.pathString = location.path();
  }

}
