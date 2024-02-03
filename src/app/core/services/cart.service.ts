import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(private _HttpClient:HttpClient) { }
baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`
cartNumber:BehaviorSubject <number> = new BehaviorSubject(0)
addToCart(pId:string):Observable<any>{
  return this._HttpClient.post(this.baseUrl + `cart/`,
  { productId : pId}  )
}
getCartUser():Observable<any>{
  return this._HttpClient.get(this.baseUrl + `cart/`)
}
removeCartItem(pId:string):Observable<any>{
  return this._HttpClient.delete(this.baseUrl + `cart/${pId}`)
}
updateCartItem(countNum:number,pId:string):Observable<any>{
  return this._HttpClient.put(this.baseUrl + `cart/${pId}`,  {count:countNum})
}
clearCart():Observable<any>{
  return this._HttpClient.delete(this.baseUrl + `cart/`)
}
checkOut(cId:string|null,orderInfo:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl +`orders/checkout-session/${cId}?url=https://soher-amged1.github.io/FrechCartEcommerce`,
  {shippingAddress:orderInfo}
  )
}
getAllOrders(uId:string):Observable<any>{
  return this._HttpClient.get(this.baseUrl + `/api/v1/orders/user/${uId}`)
}
}
