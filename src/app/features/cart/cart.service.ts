import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from '../product/model/product';
import { ProductService } from '../product/product.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private productService: ProductService) {
      if (isPlatformBrowser(this.platformId)) {
        const savedCart = localStorage.getItem('myCart');
        if (savedCart) {
          this.cart = JSON.parse(savedCart);
        }
      }
  }

  addProdToCart(id: number) {
    this.productService.getProductById$(id.toString()).subscribe((product) => {
      if (product) {
        console.log(product);
        this.cart.push(product);
         localStorage.setItem('myCart', JSON.stringify(this.cart));
      }
    });
  }
}
