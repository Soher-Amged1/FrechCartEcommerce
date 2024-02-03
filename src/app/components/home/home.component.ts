 import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { Category } from 'src/app/core/interface/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
constructor(private _WishListService:WishListService ,private _CartService:CartService,private _Renderer2:Renderer2
,private _ProductService:ProductService,private _ToastrService: ToastrService){
}

wishListData:string[]=[];
products : Product[] = [];
categories : Category[]=[];
term:string=''
  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(response) =>{
        this.products=response.data

      } ,
      error:(err)=>{
        console.log(err);
      }})

    this._ProductService.getCategories().subscribe({
      next:(response) =>{
        this.categories=response.data;
      },
    })
    this._WishListService.getToWishList().subscribe({
      next:(res)=>{
        const newData=res.data.map((item:any)=>item._id)
        this.wishListData=newData
        this._WishListService.wishNumber.next(res.data.length)

      }
    })
  }
  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:7000,
    autoplaySpeed:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    items:1,
    nav: false
  };
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

      },
    })

  }
  removeItem(pId:string){
    this._WishListService.removeProduct(pId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message)
        this.wishListData=res.data
        this._WishListService.wishNumber.next(res.data.length)
      },
    })

  }
}
