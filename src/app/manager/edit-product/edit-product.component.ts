import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/products/Product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Categories } from 'src/app/categories/Categories';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  cates:Categories[];
  
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router : Router,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getCate();
  }
  getCate(){
    this.categoryService.getCategories().subscribe(data =>{
      this.cates = data;
    })
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.productId,param.cateId).subscribe(data => {
        this.product = data;
      })
    })
  }
  saveProduct(){
    this.productService.saveProduct(this.product, this.product.cateId,this.product.id).subscribe(data => {
      // console.log(data);
      this.router.navigateByUrl(`/manager/${data.cateId}/products`)
    })
  }
}
