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
  readonly INVALID_PRODUCT_PRICE = -1;
  readonly INVALID_PRODUCT_AMOUNT = 0;

  constructor(@Inject(CART_SERVICE) private cartService: CartService) { }

  public decreaseAmount() {
    this.cartService.changeProductAmount(this.product, -1);
  }

  public increaseAmount() {
    this.cartService.changeProductAmount(this.product, 1);
  }

  public removeProduct() {
    this.cartService.removeProduct(this.product);
  }
}
