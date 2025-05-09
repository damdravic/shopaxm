import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AxmHttpResponse } from '../../core/interface/AxmHttpResponse';
import { Product } from './model/product';
import { environment } from '../../../environment/environment';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private server = environment.apiUrl;

  constructor(private http: HttpClient) { }
    

  public getProducts$(): Observable<AxmHttpResponse<{ products: Product[] }>>{
console.log("in service ...")
    return this.http.get<AxmHttpResponse<{products: Product[]}>>(
      `${this.server}/product/all`).pipe(
        tap(response => console.log('API response products ', response.data?.products)),
        catchError((error) => {
         const fallback: AxmHttpResponse<{ products: Product[] }> = {
           httpStatus: 'BAD_REQUEST',
           httpCode: 400,
           message: 'Error fetching products',
           data: { products: [] },
           timeStamp: new Date().toISOString(),
           developerMessage: '',
           reason: '',
         };
         return of(fallback);
        })
      )
  }
   



   
}
