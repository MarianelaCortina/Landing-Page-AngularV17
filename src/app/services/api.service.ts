import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private _urlBase: string = 'https://fakestoreapi.com/products';
  private _category: string = 'category'

  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._urlBase);
  }

  getProductById(id: number): Observable<IProduct>{
    return this._http.get<IProduct>(`${this._urlBase}/${id}`)
  }

  getProductsByCategory(category: Category): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this._urlBase}/${this._category}/${category}`);
  }
}
