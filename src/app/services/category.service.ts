import { Injectable } from '@angular/core';
import { Categories } from '../categories/Categories';
import { Product } from '../products/Product';

import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API : string = "http://5d44d958d823c300147719fc.mockapi.io/";
  constructor( private  http: HttpClient) { }

  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(`${this.API}/cate`);
  }
  getCate(id): Observable<Categories>{
    return this.http.get<Categories>(`${this.API}/cate/${id}`);
  }
  getProducts(cateId): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API}/cate/${cateId}/products`);
  }

}
