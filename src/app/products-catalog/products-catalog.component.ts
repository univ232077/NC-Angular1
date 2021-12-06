import { Component } from '@angular/core';
import {ProductCardModel} from "../models/productCard.model";
import {productCards} from "../mock/productCard.mock";

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.css']
})
export class ProductsCatalogComponent {
  productCards: ProductCardModel[] = productCards;
}
