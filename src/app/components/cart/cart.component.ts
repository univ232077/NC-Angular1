import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {CartProductModel} from "../../models/cartProduct.model";
import {CART_SERVICE} from "../../app.module";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProductModel[] = [];
  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(@Inject(CART_SERVICE) private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
  }
}
