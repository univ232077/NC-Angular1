import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsCatalogComponent } from './products-catalog/products-catalog.component';
import { CartComponent } from './cart/cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsCatalogComponent,
    CartComponent,
    CartProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
