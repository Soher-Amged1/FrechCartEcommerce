import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private HttpClient:HttpClient) { }
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`

  getProducts(pageNum:number=1):Observable<any>{
    return this.HttpClient.get(this.baseUrl + `products?page=${pageNum}`)
  }
  getCategories():Observable<any>{
    return this.HttpClient.get(this.baseUrl + `categories`)
  }
  getBrands():Observable<any>{
    return this.HttpClient.get(this.baseUrl + `brands`)
  }
  getSpecBrand(pId:string) :Observable<any>{
    return this.HttpClient.get(this.baseUrl+`brands/${pId}`)
  }
  getCategoriesDetails(id:string|null):Observable<any>{
    return this.HttpClient.get(this.baseUrl + `categories/${id}`)
  }
  
  getSpecificProduct(id:string|null):Observable<any>{
    return this.HttpClient.get(this.baseUrl + `products/${id}`)
  }
}
