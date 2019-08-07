import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Product';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  constructor(
    private route : ActivatedRoute,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => {
        this.product = data;
      })
    })
  }
}
