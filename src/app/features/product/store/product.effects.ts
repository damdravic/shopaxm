import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadProductActions } from './product.actions';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { ProductService } from '../product.service';
import { response } from 'express';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadProductActions.start),
      switchMap(() =>
        from(this.productService.getProducts$()).pipe(
          tap((response) => console.log('Response API : ', response)),
          map((response) => {
            const products = response.data.products;
            return LoadProductActions.success({ products }); // call action success to populate products array
          }),
          catchError((error) => of(LoadProductActions.failure({ error })))
        )
      ) //call action fail to display error
    )
  );
}

export const loadProductsSSR = createEffect(
  () =>
    inject(ProductService)
      .getProducts$()
      .pipe(
        tap((response) => console.log(response)),
        map((response) =>
          
          LoadProductActions.success({ products: response.data.products })
        ),
        catchError((error) => {
          console.error('[SSR] Error loading products ❌', error);
          return of(
            LoadProductActions.failure({
              error: error.message || 'Server error',
            })
          );
        })
      ),
  { functional: true }
);
