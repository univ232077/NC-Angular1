import {Component, EventEmitter, Output} from '@angular/core';
import {CartProductModel} from "../models/cartProduct.model";
import {cartProductsMock} from "../mock/cartProducts.mock";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();
  // cartProducts: CartProductModel[] = []; // EMPTY CART IMITATION
  cartProducts: CartProductModel[] = cartProductsMock;
}
