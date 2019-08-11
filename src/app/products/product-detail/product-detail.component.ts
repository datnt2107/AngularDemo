import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/products/Product';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Categories } from 'src/app/categories/Categories';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  
  constructor(
    private routes : ActivatedRoute,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.routes.params.subscribe(param => {
      this.productService.getProduct(param.productId,param.cateId).subscribe(data => {
        this.product = data;
      })
    })
  }
  
}
