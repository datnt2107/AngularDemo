import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './manager/product/product.component';
import { EditProductComponent } from './manager/edit-product/edit-product.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "products", component: ProductsComponent },
  { path: "cate/:cateId/products/:productId", component: ProductDetailComponent },
  // { path: "product/add", component: AddProductComponent },
  { path: "manager", component: ManagerComponent },
  { path: "manager/:cateId/products", component: ProductComponent},
  { path: "manager/:cateId/products/:productId", component: EditProductComponent},
  { path: "cate/:id", component: CategoriesComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
