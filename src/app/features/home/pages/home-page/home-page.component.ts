import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { catchError, map, of } from 'rxjs';
import { ListOfProductsComponent } from "../../../product/components/list-of-products/list-of-products.component";
import { HttpResponse } from '@angular/common/http';
import { Product } from '../../../product/model/product';

@Component({
  selector: 'app-home-page',
  imports: [ListOfProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
 
  products: Product[] =[];

 constructor(private productService : ProductService){}
 
  ngOnInit(): void {

  }



  

}
