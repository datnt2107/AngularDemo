import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductListing();
  }
  getProductListing(){
    this.productService.getProductListing().subscribe(data => {
      this.products = data;
    })
  }

}