import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCatalogComponent } from "./components/products-catalog/products-catalog.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductDetailsGuard} from "./guards/product-details.guard";

const routes: Routes = [
    { path: 'product/:id', component: ProductDetailsComponent, canActivate: [ProductDetailsGuard] },
    { path: 'catalog', component: ProductsCatalogComponent },
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}