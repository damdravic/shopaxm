import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product/model/product';
import { CartCardComponent } from '../../cards/cart-card/cart-card.component';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  myCart: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.myCart = [...this.cartService.cart];
  }
}