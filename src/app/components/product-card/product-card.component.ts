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
  constructor(@Inject(CART_SERVICE) public cartService: CartService) { }
  @Input() productCard: ProductModel | undefined;
}
