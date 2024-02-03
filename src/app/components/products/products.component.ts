import { Component, OnInit ,Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interface/product';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,CuttextPipe,RouterLink,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(private _ProductService:ProductService,private _WishListService:WishListService ,private _CartService:CartService,private _Renderer2:Renderer2
    ,private _ToastrService: ToastrService){
  }
  
  products : Product[] = [];
  itemsperPage:number=0;
  currentPage:number=1;
  total:number=0;
  errMessage!:string;
  wishListData:string[]=[];

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(response) =>{
        this.products=response.data;
        this.itemsperPage=response.metadata.limit;
        this.currentPage=response.metadata.currentPage;
        this.total=response.results;


      } ,
      error:(err)=>{
        
      this.errMessage=err.error.message
        }     
       })
   this._WishListService.getToWishList().subscribe({
        next:(res)=>{
          const newData=res.data.map((item:any)=>item._id)
          this.wishListData=newData
          this._WishListService.wishNumber.next(res.data.length)
  
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

  pageChanged(event:any):void{

    this._ProductService.getProducts(event).subscribe({
      next:(response) =>{
        this.products=response.data;
        this.itemsperPage=response.metadata.limit;
        this.currentPage=response.metadata.currentPage;
        this.total=response.results;


      } ,
      error:(err)=>{
        console.log(err);
      }})
    
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
