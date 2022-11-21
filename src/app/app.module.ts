import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home-sections/home/home.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './home-sections/banner/banner.component';
import { CategoryComponent } from './home-sections/category/category.component';
import { FeaturedComponent } from './home-sections/featured/featured.component';
import { BrandComponent } from './product/brand/brand.component';
import { SingleProductComponent } from './product/single-product/single-product.component';
import { RelatedProductsComponent } from './product/related-products/related-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    NavHeaderComponent,
    FooterComponent,
    BannerComponent,
    CategoryComponent,
    FeaturedComponent,
    BrandComponent,
    SingleProductComponent,
    RelatedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
