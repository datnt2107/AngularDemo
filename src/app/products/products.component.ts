import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../categories/Categories';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[];
  cate : Categories;
  constructor(
    private productService: ProductService,
    private cateService :CategoryService,
    private routes: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getProductListing();
    this.getCate();
  }
  getProductListing(){
    this.productService.getProductListing().subscribe(data => {
      this.products = data;
    })
  }
  getCate(){
    this.routes.params.subscribe(param => {
      this.cateService.getCate(param.id).subscribe(data => {
        console.log(data);
        // this.cate = data;
      })
    })
  }

}
