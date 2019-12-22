import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  /*
  ngOnChanges(changes: SimpleChanges) {
    console.log('on change');
    console.log(changes);
  }
  */

  ngOnInit() {
    console.log('on init');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
