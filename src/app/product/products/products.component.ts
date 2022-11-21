import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  product_data:any = [];

  constructor(private productService:ProductService) {  }

  ngOnInit(): void {

    this.productService.load_product().subscribe(product_data => {
      this.product_data = product_data;
      console.log(product_data);
    })
  }
}
