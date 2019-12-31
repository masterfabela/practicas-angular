import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'proyectoAngular';
  items = ['nicolas', 'julian', 'perez'];
  products: Product[] = [
    {
      id: '1',
      imageURL: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 50.0,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      imageURL: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 30.0,
      description: 'bla bla bla bla'
    },
    {
      id: '3',
      imageURL: 'assets/images/mug.png',
      title: 'Mug',
      price: 30.0,
      description: 'bla bla bla bla'
    },
    {
      id: '4',
      imageURL: 'assets/images/pin.png',
      title: 'Pin',
      price: 30.0,
      description: 'bla bla bla bla'
    },
    {
      id: '5',
      imageURL: 'assets/images/stickers1.png',
      title: 'Stickers 1',
      price: 30.0,
      description: 'bla bla bla bla'
    }
  ];

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clickProduct(id: string) {
    console.log('product');
    console.log(id);
  }
}
