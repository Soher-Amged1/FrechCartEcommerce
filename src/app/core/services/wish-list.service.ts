import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`
  wishNumber:BehaviorSubject <number> = new BehaviorSubject(0)

  constructor(private _HttpClient:HttpClient) { }

  addToWishList(pId:string):Observable<any>{
    return this._HttpClient.post( this.baseUrl + `wishlist`,{productId:pId} )
  }
  getToWishList():Observable<any>{
    return this._HttpClient.get( this.baseUrl + `wishlist` )
  }
  removeProduct(pId:string):Observable<any>{
    return this._HttpClient.delete( this.baseUrl + `wishlist/${pId}` )
  }
}
