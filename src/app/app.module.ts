import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsMenuComponent } from './products-menu/products-menu.component';
import { CartComponent } from './cart/cart.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartProductComponent } from './cart-product/cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsMenuComponent,
    CartComponent,
    CartProductsComponent,
    CartProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
