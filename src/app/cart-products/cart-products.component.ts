import { Component, OnInit } from '@angular/core';
import {CartProductModel} from "../models/cartProduct.model";
import {cartProductsMock} from "../mock/cartProducts.mock";

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent {
  cartProducts: CartProductModel[] = []; // EMPTY CART IMITATION
  // cartProducts: CartProductModel[] = cartProductsMock;
}
