import { DataState } from "../../../core/interface/DataStatus";
import { Product } from "../model/product";

export interface ProductState {
    dataState: DataState;
    products : Product[];
    error ?: string | null; 
}

export const initialProductState: ProductState = {
    dataState : DataState.PENDING,
    products: [],
    error : null,
}