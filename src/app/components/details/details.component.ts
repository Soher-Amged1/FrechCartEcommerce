import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { ProdDetails } from 'src/app/core/interface/prod-details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {//to know other developers use oninit
  constructor(private _CartService:CartService,
    private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService
    ,private _Renderer2:Renderer2,private _ToastrService: ToastrService
    ){}
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
     items:1,
    nav:true}
  productId!:string|null;
  productDetails?:ProdDetails;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params) =>{
       this.productId= params.get('id')
       console.log(this.productId);
      }
    })
    this._ProductService.getSpecificProduct(this.productId).subscribe({
      next:({data})=>{//distructing
        console.log(data);
        this.productDetails=data;
        
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

}
