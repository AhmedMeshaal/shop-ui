import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { API_SERVER_URL } from "../../environments/environment";
import {tap} from "rxjs/operators";


const  httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  load_product (): Observable<any> {
    return this.httpClient.get(`${API_SERVER_URL}/api/products/load_product`).pipe(
      tap(async (res: any) =>{
        console.log(res);
      })
    );
  }

  save_product(product_info:any): Observable<any> {
    return this.httpClient.post(`${API_SERVER_URL}/api/products/save_product`, product_info).pipe(
      tap(async (res: any) =>{
        console.log(res);
      })
    );
  }

  // load_documents (ProductID): Observable<any> {
  //   return this.httpClient.get(`${API_SERVER_URL}/api/products/load_documents/${ProductID}`).pipe(
  //     tap(async (res: any) =>{
  //       console.log(res);
  //     })
  //   );
  // }

}
