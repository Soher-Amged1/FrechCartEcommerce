import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ForgetPasswordService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`
  forgetPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +`forgotPasswords`,userEmail)
  }
  resetCode(resetForm:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +`verifyResetCode`,resetForm)
  }
  resetPassword(resetPasswordForm:object):Observable<any>{
    return this._HttpClient.put(this.baseUrl +`resetPassword`,resetPasswordForm)
  }
}
