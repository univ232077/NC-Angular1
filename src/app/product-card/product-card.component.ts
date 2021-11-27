import { Component, OnInit, Input } from '@angular/core';
import {ProductCardModel} from "../models/productCard.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productCard: ProductCardModel | undefined;
}
