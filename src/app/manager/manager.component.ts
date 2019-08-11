import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products/Product';
import { ProductService } from '../services/product.service';
import { Categories } from '../categories/Categories';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  editProduct : Product;
  products : Product[];
  
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router : Router,
    private route : ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getProductListing();
    
  }
  getProductListing(){
    this.productService.getProductListing().subscribe(data => {
      this.products = data;
    })
  }
  
  

}
