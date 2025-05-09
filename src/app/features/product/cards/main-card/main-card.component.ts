import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-main-card',
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  @Input() product !: Product;


}
