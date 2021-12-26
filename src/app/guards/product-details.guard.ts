import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {PRODUCT_SERVICE} from "../app.module";
import {ProductService} from "../services/product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {
  constructor(@Inject(PRODUCT_SERVICE) private productService: ProductService,
              private router: Router) { }

  canActivate(
    snapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const productExists = this.productService.getAvailableProducts().filter((item) => {
      return item.id === +snapshot.params['id']
    }).length > 0;

    if (!productExists) {
      this.router.navigate(['/catalog']).then(() => {});
      return false;
    }

    return true;
  }
}
