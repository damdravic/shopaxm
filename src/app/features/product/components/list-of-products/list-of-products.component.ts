import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../../cards/main-card/main-card.component';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../store/product.selectors';
import { Observable, of } from 'rxjs';
import { LoadProductActions } from '../../store/product.actions';

@Component({
  selector: 'app-list-of-products',
  imports: [CommonModule, MainCardComponent],
  templateUrl: './list-of-products.component.html',
  styleUrl: './list-of-products.component.scss',
})
export class ListOfProductsComponent implements OnInit {
  
  products$ !: Observable<Product[]> ;
  
 
  constructor(private productService: ProductService, private store: Store) {}
  ngOnInit(): void {
    console.log("onInit");
    this.store.dispatch(LoadProductActions.start());
   this.products$ = this.store.select(selectProducts);
  }

}
