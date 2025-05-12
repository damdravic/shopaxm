import { createReducer, on } from '@ngrx/store';
import { LoadProductActions } from './product.actions';
import { initialProductState } from './productState';
import { DataState } from '../../../core/interface/DataStatus';

export const productFeatureKey = 'product';


// -------------------------------- ProductReducer - 
export const productReducer = createReducer(
  initialProductState,



  // ---------------------------------------LoadProduct-------------------
  
  on(LoadProductActions.start, (state) => ({
    ...state,
    dataState:DataState.LOADING,
  })),

  on(LoadProductActions.success, (state, { products }) => ({
    ...state,
    dataState: DataState.LOADED,
    products: [...products],
    error : null 
  })),

  on(LoadProductActions.failure, (state, { error }) => ({
    ...state,
    dataState: DataState.ERROR,
    error : error
  }))

  

 






);

