import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Product } from '../../../product/model/product';

@Component({
  selector: 'app-cart-card',
  imports: [CommonModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  
  @Input() product!: Product;



}
