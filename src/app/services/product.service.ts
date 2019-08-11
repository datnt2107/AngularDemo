import { Injectable } from '@angular/core';
import { Product } from '../products/Product';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API : string = "http://5d44d958d823c300147719fc.mockapi.io/";
  constructor(private http: HttpClient) { }
  getProductListing(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API}/cate`);
  }
  
  getProduct(id,cateId): Observable<Product>{
    return this.http.get<Product>(`${this.API}/cate/${cateId}/products/${id}`);
  }

  addProduct(product,cateId): Observable<Product> {
    return this.http.post<Product>(`${this.API}/cate/${cateId}/products`, product);
  }
  
  saveProduct(product, cateId,productID): Observable<Product>{
    return this.http.put<Product>(`${this.API}/cate/${cateId}/products/${productID}`, product);
  }

  deleteProduct(cateId,productID): Observable<Product>{
    return this.http.delete<Product>(`${this.API}/cate/${cateId}/products/${productID}`);
  }
  
}
