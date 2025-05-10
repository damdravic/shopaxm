import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-card',
  imports: [CommonModule,RouterModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  @Input() product !: Product;


}
