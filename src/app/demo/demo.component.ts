import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {
  constructor() {}

  title = 'proyectoAngular';
  items = ['nicolas', 'julian', 'perez'];

  ngOnInit() {}

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
