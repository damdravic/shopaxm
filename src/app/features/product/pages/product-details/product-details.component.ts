import { Component, Input, OnInit } from '@angular/core';
import { emptyProduct, Product } from '../../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product: Product = emptyProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((params) => {
      let productId = params.get('id');
      console.log(productId);
      if (productId) {
        this.productService.getProductById$(productId).subscribe((product) => {
          if (product) {
            this.product = product;
            console.log(product?.description);
          }
        });
      } else {
        console.log('nu l gasesc');
      }
    });
  }
  ngOnInit(): void {}
}
