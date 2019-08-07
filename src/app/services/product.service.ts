import { Injectable } from '@angular/core';
import { Product } from '../Product';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API : string = "http://5d44d958d823c300147719fc.mockapi.io/products";
  constructor(private http: HttpClient) { }
  getProductListing(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }
  deleteProduct(id){
    return this.http.delete<Product[]>(`${this.API}/${id}`)
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }
  saveProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }
}
