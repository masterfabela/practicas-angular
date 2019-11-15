import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'proyectoAngular';
  items = ['nicolas', 'julian', 'perez'];

  addItem(){
    this.items.push('Nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
