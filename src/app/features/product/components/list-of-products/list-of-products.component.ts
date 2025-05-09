import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../../cards/main-card/main-card.component';

@Component({
  selector: 'app-list-of-products',
  imports: [CommonModule,MainCardComponent],
  templateUrl: './list-of-products.component.html',
  styleUrl: './list-of-products.component.scss'
})
export class ListOfProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService : ProductService){}
  ngOnInit(): void {
    this.productService.getProducts$().subscribe(
      response => this.products = response.data.products 
   
 )  }


  




}
