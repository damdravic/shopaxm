import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './productState';

export const selectProductState = createFeatureSelector<ProductState>('product')

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
    
)

export const selectProdDataState = createSelector(
    selectProductState,
    (state) => state.dataState
)