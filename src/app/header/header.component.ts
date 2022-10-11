import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  assetLocation: string = '/assets/asset-discount.jpg';

  slogon: string = 'Your stop for everything';

  getSlogon() {
    return 'This is the new slogon for the website';
  }
  ngOnInit(): void {}
}
