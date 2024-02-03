import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{

  constructor(private _Renderer2:Renderer2,private _Router:Router,private _CartService:CartService,
    private _WishListService:WishListService
    ){}
  cartNum:number=0;
  wishNum:number=0;

  @ViewChild('navBar') navElement!:ElementRef  //Element

  @HostListener('window:scroll')//method after fire   Run on window ,body ,document
  onScroll():void{
    if(scrollY>500){
    this._Renderer2.addClass(this.navElement.nativeElement,'px-5')
    this._Renderer2.addClass(this.navElement.nativeElement,'shadow')

    }
    else
    {    this._Renderer2.removeClass(this.navElement.nativeElement,'px-5')
      this._Renderer2.removeClass(this.navElement.nativeElement,'shadow')

  }
  }


ngOnInit(): void {
 
  this._CartService.cartNumber.subscribe({
    next:(data)=>{
      this.cartNum=data
    }
  });
  this._WishListService.wishNumber.subscribe({
    next:(data)=>{
      this.wishNum=data
    }
  });

  this._CartService.getCartUser().subscribe({
    next:(res)=>{
      this.cartNum=res.numOfCartItems
    }
  })
  this._WishListService.getToWishList().subscribe({
    next:(res)=>{
      this.wishNum=res.data.length
    }
  })
}
signOut():void{
  localStorage.removeItem('etoken');
  this._Router.navigate(['/login'])
}

}
