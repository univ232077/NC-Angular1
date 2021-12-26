import {Component, Inject, Input} from '@angular/core';
import {CartProductModel} from "../../models/cartProduct.model";
import {CART_SERVICE} from "../../app.module";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  @Input() product: CartProductModel | undefined;
  constructor(@Inject(CART_SERVICE) public cartService: CartService) { }
}
