import {Component, Inject, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {PRODUCT_SERVICE} from "../../app.module";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.css']
})
export class ProductsCatalogComponent implements OnInit {
  productCards: ProductModel[] = [];
  search: string = '';

  constructor(@Inject(PRODUCT_SERVICE) private productService: ProductService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  onSearch(): void {
    this.router.navigate(['/catalog'], {
      queryParams: {
        search: this.search
      }
    }).then(() => {});
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const search = params.get('search') || '';
      this.productCards = this.productService.findProducts(search);
    })
  }
}
