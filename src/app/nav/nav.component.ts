import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-nav]', --can be used as an attibute
  // selector: '.app-nav', --can be used as a class
  selector: 'app-nav', //--can be used as an element
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  siteName: string = 'साझा पसल | Sajha Pasal';
}
