import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {API_SERVER_URL} from "../../environments/environment";
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

}
