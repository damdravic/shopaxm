import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../model/product';
import { error } from 'node:console';

export const LoadProductActions = createActionGroup({
  source: 'Product - Load',
  events: {
    'Start': emptyProps(),
    'Success':props<{products : Product[]}>(),
    'Failure': props<{error : string}>(),
  }
});
