import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories/Categories';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/Product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cates : Categories[];
  cate : Categories;
  products : Product[];

  constructor(private categoryService: CategoryService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
    this.getCate();
  }
  getProducts(){
    this.routes.params.subscribe(param => {
      this.categoryService.getProducts(param.id).subscribe(data => {
        this.products = data;
      })
    })
  }
  getCate(){
    this.routes.params.subscribe(param => {
      this.categoryService.getCate(param.id).subscribe(data => {
        this.cate = data;
      })
    })
  }
}
