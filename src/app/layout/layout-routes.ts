import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ListOfProductsComponent } from '../features/product/components/list-of-products/list-of-products.component';
import { HomePageComponent } from '../features/home/pages/home-page/home-page.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'product',
        loadChildren: () => import("../features/product/product.routes").then(m => m.productRoutes)
      }
    ],
  },
];
