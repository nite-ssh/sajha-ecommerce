import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
    `
      .card {
        max-width: 444px;
      }
    `,
  ],
})
export class ProductComponent implements OnInit {
  @Input() inputProduct!: any;
  constructor() {}

  ngOnInit(): void {}
}
