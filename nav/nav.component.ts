import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuOpen: boolean = false;

  constructor() { }

  ngOnInit() {}

  toogleMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
