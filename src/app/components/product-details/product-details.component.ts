import {Component, Inject, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {PRODUCT_SERVICE} from "../../app.module";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel | undefined;

  constructor(@Inject(PRODUCT_SERVICE) private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const searchID: string = this.activatedRoute.snapshot.params['id'];
    if (searchID) {
      this.product = this.productService.getAvailableProducts().find((item) => {
        return item.id === +searchID;
      })
    }
  }
}
