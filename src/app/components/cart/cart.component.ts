import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/core/interface/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartDetails?:Cart;
  
  constructor(private _CartService:CartService,private _Renderer2:Renderer2
    ){

  }
ngOnInit(): void {
  this._CartService.getCartUser().subscribe({
    next:(resp)=>{
      console.log(resp);
      this.cartDetails=resp.data;
    }
  })
}

removeItem(pId:string,element:HTMLButtonElement):void{
  this._Renderer2.setAttribute(element,'disabled','true')

   this._CartService.removeCartItem(pId).subscribe({
    next:(res)=> {
      console.log(res);
      this.cartDetails=res.data;
      this._Renderer2.removeAttribute(element,'disabled')
      this._CartService.cartNumber.next(res.numOfCartItems)

    },
    
      error:(err)=>{
        this._Renderer2.removeAttribute(element,'disabled')
      }

  })
}
changeCount(count:number,pId:string,element:HTMLButtonElement,element2:HTMLButtonElement):void{
  if(count>=1){
    this._Renderer2.setAttribute(element,'disabled','true')
    this._Renderer2.setAttribute(element2,'disabled','true')

    this._CartService.updateCartItem(count,pId).subscribe({
      next:(res)=> {
        console.log(res);
        this.cartDetails=res.data;
        this._Renderer2.removeAttribute(element,'disabled')
        this._Renderer2.removeAttribute(element2,'disabled')

      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element,'disabled')
        this._Renderer2.removeAttribute(element2,'disabled')
      }
       
  })
  }
    }
    clearCart():void{
      this._CartService.clearCart().subscribe({
        next:(res)=> {
          if(res.message=="success"){
            this.cartDetails==null;
            this._CartService.cartNumber.next(0)
          }
        }
      })
    }
}