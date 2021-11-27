import { Component, OnInit } from '@angular/core';
import {ProductCardModel} from "../models/productCard.model";
import {productCards} from "../mock/productCard.mock";

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.css']
})
export class ProductsMenuComponent {
  productCards: ProductCardModel[] = productCards;
  // productCards: ProductCardModel[] = []; // empty products list
}
