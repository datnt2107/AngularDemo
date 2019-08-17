import { Component, OnInit, Input } from '@angular/core';
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
  cate :Categories;

  constructor(
    private categoryService: CategoryService,
    private routes: ActivatedRoute,
    private productService: ProductService,
    private router : Router,
    ) { }

  ngOnInit() {
    this.getProducts();
    this.getCates();
    this.getCateName();
  }
  getCateName(){
    this.routes.params.subscribe(param => {
      this.categoryService.getCate(param.cateId).subscribe(data => {
        // console.log(data);
        this.cate = data;
      })
    })
  }
  getProducts(){
    this.routes.params.subscribe(param => {
      this.categoryService.getProducts(param.cateId).subscribe(data => {
        this.products = data;
      })
    })
  }
  getCates(){
    this.categoryService.getCategories().subscribe(data =>{
      this.cates = data;
    })
  }
  addProduct(){
    this.productService.addProduct(this.product,this.product.cateId).subscribe(data => {
      this.products.push(data);
    })
  }
  removeProduct(product){
    this.productService.deleteProduct(product.cateId,product.id).subscribe(data=> {
      console.log(data);
      this.products = this.products.filter(item => item.id != data.id);
    })
  }
  
    // public popoverTitle: string = 'Detete product';
    // public popoverMessage: string = 'Are you sure you want to delete?';
    // public confirmClicked: boolean = false;
    // public cancelClicked: boolean = false;
    
    
}
