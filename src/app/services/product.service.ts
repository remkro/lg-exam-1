import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductExtendedModel } from '../models/product-extended.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', product);
  }

  getAll(): Observable<ProductExtendedModel[]> {
    return this._httpClient.get<ProductExtendedModel[]>('https://fakestoreapi.com/products');
  }

  getOne(id: string): Observable<ProductExtendedModel> {
    return this._httpClient.get<ProductExtendedModel>('https://fakestoreapi.com/products/' + id);
  }
}
