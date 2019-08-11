import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories/Categories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cates : Categories[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCate();
  }
  getCate(){
    this.categoryService.getCategories().subscribe(data =>{
      // console.log(data);
      this.cates = data;
    })
  }
}
