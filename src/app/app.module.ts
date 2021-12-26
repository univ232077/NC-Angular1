import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsCatalogComponent } from './components/products-catalog/products-catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { ProductService } from "./services/product.service";
import { AppRoutingModule } from "./app-routing.module";
import { CartService } from "./services/cart.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from "@angular/forms";

export const PRODUCT_SERVICE = new InjectionToken<ProductService>('PRODUCT_SERVICE');
export const CART_SERVICE = new InjectionToken<CartService>('CART_SERVICE');

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsCatalogComponent,
    CartComponent,
    CartProductComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: PRODUCT_SERVICE, useExisting: ProductService },
    { provide: CART_SERVICE, useExisting: CartService },
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule {

}
