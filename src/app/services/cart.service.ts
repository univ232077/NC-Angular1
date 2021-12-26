
import { Injectable } from "@angular/core";
import {CartProductModel} from "../models/cartProduct.model";
import {ProductModel} from "../models/product.model";

const MIN_PRODUCTS_AMOUNT = 1;
const MAX_PRODUCTS_AMOUNT = 10;

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartProducts: CartProductModel[] = [];

    public getCartProducts(): CartProductModel[] {
        return this.cartProducts;
    }

    public changeProductAmount(product: CartProductModel | ProductModel | undefined, changeBy: number): void {
        if (!product) return;

        const cartProduct = this.cartProducts.find((item) => {return item.id === product.id;});
        if (!cartProduct) return;
        if (changeBy + cartProduct.amount < MIN_PRODUCTS_AMOUNT ||
            changeBy + cartProduct.amount > MAX_PRODUCTS_AMOUNT) {
            return
        }
        cartProduct.amount += changeBy;
    }

    public addProduct(productModel: ProductModel | undefined): void {
        if (!productModel) return;
        const cartProduct = this.cartProducts.find((item) => {return item.id === productModel.id});
        if (!cartProduct) {
            this.cartProducts.push({
                id: productModel.id,
                amount: 1,
                name: productModel.name,
                price: productModel.price,
            });
            this.cartProducts.sort((a, b) => { return a.id - b.id; })
        }
    }

    public removeProduct(product: CartProductModel | ProductModel | undefined): void {
        if (!product) return;
        const cartProduct = this.cartProducts.find((item) => {return item.id === product.id});
        if (cartProduct) {
            this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1);
        }
    }
}

