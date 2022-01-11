import {Component, Input, Inject} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {CART_SERVICE} from "../../app.module";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productCard: ProductModel | undefined;

  constructor(@Inject(CART_SERVICE) private cartService: CartService) { }

  public addToCart() {
    this.cartService.addProduct(this.productCard);
  }
}
