import {Component, Input, OnInit} from '@angular/core';
import {CartProductModel} from "../models/cartProduct.model";

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  @Input() product: CartProductModel | undefined;
}
