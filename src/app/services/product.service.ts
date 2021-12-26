
import { ProductModel } from "../models/product.model";
import { productCards } from "../mock/productCard.mock";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public getAvailableProducts(): ProductModel[] {
        return productCards;
    }

    public findProducts(query: string) {
        const products = this.getAvailableProducts();
        query = query.toLowerCase();
        return products.filter((item) => {
            return item.name.toLowerCase().includes(query) || item.description?.toLowerCase().includes(query);
        })
    }
}
