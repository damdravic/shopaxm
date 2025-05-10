import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";

export const productRoutes: Routes = [
    {
        path: ':id',
        component:ProductDetailsComponent
     }
 ]