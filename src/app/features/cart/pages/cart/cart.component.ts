import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../../product/model/product';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../../../product/cards/main-card/main-card.component';
import { CartCardComponent } from '../../cards/cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
 
   myCart :Product[] = []
 
   constructor(private cartService : CartService){}
 
   
 
 
 
  ngOnInit(): void {
    this.myCart = [...this.cartService.cart];
  }

}
