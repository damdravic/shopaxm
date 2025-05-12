import { Component, Input, OnInit } from '@angular/core';
import { emptyProduct, Product } from '../../model/product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../product.service';
import { ListOfProductsComponent } from '../../components/list-of-products/list-of-products.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus, faHeartCirclePlus, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [ListOfProductsComponent,CommonModule,RouterModule,FontAwesomeModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product: Product = emptyProduct;

  //fontAwesome 
  faCartPlus = faCartPlus
  faArrowLeft = faArrowLeft
  faHeartCirclePlus = faHeartCirclePlus
 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
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

  addToCart(id: number) { 
    //TODO need to dispatch action
    console.log("in Product Details Id -> : ", id)
    this.cartService.addProdToCart(id);
    
  }
  addToWish(id : number) { }

  ngOnInit(): void { }
  

}
