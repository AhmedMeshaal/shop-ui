import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./product/products/products.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home-sections/home/home.component";
import { SingleProductComponent } from "./product/single-product/single-product.component";
import {InsertProductComponent} from "./product/insert-product/insert-product.component";
// import {RelatedProductsComponent} from "./product/related-products/related-products.component";
// import { NewProductComponent } from "./product/new-product/new-product.component";


const routes: Routes = [
  { path: 'products', component: ProductsComponent, title: 'PRODUCTS'},
  { path: 'about-us', component: AboutUsComponent, title: 'ABOUT US'},
  { path: 'contact-us', component: ContactUsComponent, title: 'CONTACT US'},
  { path: '', component: HomeComponent, title: 'HOME' },
  { path: 'single-product', component: SingleProductComponent },
  { path: 'insert-product', component: InsertProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
