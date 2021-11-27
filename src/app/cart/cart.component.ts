import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();
}
