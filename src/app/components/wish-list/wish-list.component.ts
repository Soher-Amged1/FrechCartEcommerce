import { Component,OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { Product } from 'src/app/core/interface/product';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})

export class WishListComponent implements OnInit{
  products : Product[] = [];
  wishListData:string[]=[];

  constructor(private _Renderer2:Renderer2,
    private _WishListService:WishListService,
    private _ToastrService: ToastrService,
    private _CartService:CartService){}
  ngOnInit(): void {
    this._WishListService.getToWishList().subscribe({
      next:(resp)=>{
        this.products=resp.data
        const newData=resp.data.map((item:any)=>item._id)
        this.wishListData=newData
        this._WishListService.wishNumber.next(resp.data.length)
      }
    })
  }
  addProduct(pId:string,element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element,'disabled','true')

    this._CartService.addToCart(pId).subscribe({
      next:(resp)=>{

        this._ToastrService.success(resp.message)
        this._Renderer2.removeAttribute(element,'disabled');
        this._CartService.cartNumber.next(resp.numOfCartItems)

      },
      error:(err)=>{
        console.log(err);
        this._ToastrService.error(err.message)
        this._Renderer2.removeAttribute(element,'disabled');

      }
    })
  }
  
  addWishList(pId:string){
    this._WishListService.addToWishList(pId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message)
        this.wishListData=res.data
        this._WishListService.wishNumber.next(res.data.length)
        console.log(res);
      },
    })

  }
  removeItem(pId:string){
    this._WishListService.removeProduct(pId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message)
        this.wishListData=res.data
        this._WishListService.wishNumber.next(res.data.length)
        const newProductsData =this.products.filter((item:any)=> this.wishListData.includes(item._id))
        this.products=newProductsData
       },
    })

  }
}

