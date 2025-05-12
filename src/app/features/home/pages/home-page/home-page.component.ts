import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { ListOfProductsComponent } from "../../../product/components/list-of-products/list-of-products.component";
import { Product } from '../../../product/model/product';
import { ImageSliderComponent } from '../../../../layout/image-slider/image-slider.component';


@Component({
  selector: 'app-home-page',
  imports: [ListOfProductsComponent, ImageSliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {


  slides: any[] = [
    {
      url: 'images/Untitled-1.png',
      title: 'Image 1',
    },
    {
      url: 'images/ewe.png',
      title: 'Image 1',
    },
  ];

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
