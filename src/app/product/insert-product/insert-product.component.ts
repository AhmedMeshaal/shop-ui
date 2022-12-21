import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  product_info = {
    id: "",
    product_name: "",
    product_description: "",
    product_price: "",
    product_quantity: "",
    size: "",
    status: ""
  };

  public frmGroupProduct: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private productService: ProductService) {



    this.frmGroupProduct = this.fb.group({
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      product_price: ['', Validators.required],
      product_quantity: ['', Validators.required],
      size: ['', Validators.required],
      status: ['', Validators.required]

    });
  }

    ngOnInit() {

      this.frmGroupProduct.get('product_name')?.setValue(this.product_info.product_name);
      this.frmGroupProduct.get('product_description')?.setValue(this.product_info.product_description);
      this.frmGroupProduct.get('product_price')?.setValue(this.product_info.product_price);
      this.frmGroupProduct.get('product_quantity')?.setValue(this.product_info.product_quantity);
      this.frmGroupProduct.get('size')?.setValue(this.product_info.size);
      this.frmGroupProduct.get('status')?.setValue(this.product_info.status);



    }



  clickSubmit(){
    this.product_info = this.frmGroupProduct.value;
        this.productService.save_product(this.product_info).subscribe(
            result=>{
              console.log("Saved Successfully");
              console.log(this.product_info);
            },
          error => {
            console.log("Not Saved");
          })
  }
}
