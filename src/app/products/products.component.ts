import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.products = fetch('https://dummyjson.com/products')
    //   .then((res) => res.json())
    //   .then(console.log);
  }

  productAvailability!: boolean;

  soldoutItemHandler() {
    console.log(this.productAvailability);
  }

  products: Products[] = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      available: true,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
      images: ['https://dummyjson.com/image/i/products/1/1.jpg'],
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology ',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      available: false,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
      images: ['https://dummyjson.com/image/i/products/2/1.jpg'],
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      available: true,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
      images: ['https://dummyjson.com/image/i/products/3/1.jpg'],
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      available: true,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
      images: ['https://dummyjson.com/image/i/products/4/1.jpg'],
    },
  ];
}
