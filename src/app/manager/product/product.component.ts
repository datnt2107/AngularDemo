import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Categories } from 'src/app/categories/Categories';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[];
  product: Product = new Product();
  cates : Categories[];

  constructor(
    private categoryService: CategoryService,
    private routes: ActivatedRoute,
    private productService: ProductService,
    private router : Router,
    ) { }

  ngOnInit() {
    this.getProducts();
    this.getCate();
  }
  getProducts(){
    this.routes.params.subscribe(param => {
      this.categoryService.getProducts(param.cateId).subscribe(data => {
        this.products = data;
      })
    })
  }
  getCate(){
    this.categoryService.getCategories().subscribe(data =>{
      this.cates = data;
    })
  }
  addProduct(){
    this.productService.addProduct(this.product,this.product.cateId).subscribe(data => {
      
    })
  }
  removeProduct(product){
    this.productService.deleteProduct(product.cateId,product.id).subscribe(data=> {
      console.log(data);
      this.products = this.products.filter(item => item.id != data.id);
    })
  }
}
