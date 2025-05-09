import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/blocks/header/header.component';
import { FooterComponent } from '../footer/blocks/footer/footer.component';
import { MegamenuComponent } from '../menu/megamenu/megamenu.component';

import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    ImageSliderComponent,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MegamenuComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  showMegaMenu = false;

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
}
