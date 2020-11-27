import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  connected = false;
  constructor() {
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
