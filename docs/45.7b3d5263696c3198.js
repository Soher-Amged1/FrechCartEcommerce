"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[45],{6286:(v,d,i)=>{i.d(d,{N:()=>m});var p=i(5619),o=i(4769),t=i(9862);let m=(()=>{class l{constructor(a){this._HttpClient=a,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new p.X(0)}addToCart(a){return this._HttpClient.post(this.baseUrl+"cart/",{productId:a})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart/")}removeCartItem(a){return this._HttpClient.delete(this.baseUrl+`cart/${a}`)}updateCartItem(a,c){return this._HttpClient.put(this.baseUrl+`cart/${c}`,{count:a})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart/")}checkOut(a,c){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${a}?url=https://soher-amged1.github.io/FrechCartEcommerce`,{shippingAddress:c})}getAllOrders(a){return this._HttpClient.get(this.baseUrl+`/api/v1/orders/user/${a}`)}static#t=this.\u0275fac=function(c){return new(c||l)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},4045:(v,d,i)=>{i.r(d),i.d(d,{BlankLayoutComponent:()=>g});var p=i(6814),o=i(1120),t=i(4769),m=i(6286),l=i(8806);const h=["navBar"];let a=(()=>{class s{constructor(e,n,r,u){this._Renderer2=e,this._Router=n,this._CartService=r,this._WishListService=u,this.cartNum=0,this.wishNum=0}onScroll(){scrollY>500?(this._Renderer2.addClass(this.navElement.nativeElement,"px-5"),this._Renderer2.addClass(this.navElement.nativeElement,"shadow")):(this._Renderer2.removeClass(this.navElement.nativeElement,"px-5"),this._Renderer2.removeClass(this.navElement.nativeElement,"shadow"))}ngOnInit(){this._CartService.cartNumber.subscribe({next:e=>{this.cartNum=e}}),this._WishListService.wishNumber.subscribe({next:e=>{this.wishNum=e}}),this._CartService.getCartUser().subscribe({next:e=>{this.cartNum=e.numOfCartItems}}),this._WishListService.getToWishList().subscribe({next:e=>{this.wishNum=e.data.length}})}signOut(){localStorage.removeItem("etoken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(t.Qsj),t.Y36(o.F0),t.Y36(m.N),t.Y36(l.i))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-nav-blank"]],viewQuery:function(n,r){if(1&n&&t.Gf(h,5),2&n){let u;t.iGM(u=t.CRH())&&(r.navElement=u.first)}},hostBindings:function(n,r){1&n&&t.NdJ("scroll",function(){return r.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:48,vars:2,consts:[[1,"navbar","navbar-expand-md","navbar-light","fixed-top","bg-light"],["navBar",""],[1,"container-fluid"],["routerLink","/home",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","Fresh Cart Logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","align-items-md-center"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fas","fa-user","fa-xl","text-main"],[1,"dropdown-menu"],["role","button","routerLink","/forgetPassword","routerLinkActive","active-link"],[1,"dropdown-item"],["routerLink","/wishlist",1,"nav-link","position-relative"],[1,"fa-solid","fa-heart","fa-2x","text-danger"],[1,"badge","bg-info","position-absolute","top-0","end-0"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-2x","text-main"],[1,"nav-item","d-flex","gap-3","me-3"],[1,"fab","fa-facebook"],[1,"fab","fa-instagram"],[1,"fab","fa-twitter"],[1,"fab","fa-tiktok"],[1,"fab","fa-youtube"],["role","button",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"Home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"Brands"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"Categories"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"Products"),t.qZA()()(),t.TgZ(21,"ul",14)(22,"li",15)(23,"a",16),t._UZ(24,"i",17),t.qZA(),t.TgZ(25,"ul",18)(26,"li",19)(27,"a",20),t._uU(28,"Forget Password"),t.qZA()()()(),t.TgZ(29,"li",9)(30,"a",21),t._UZ(31,"i",22),t.TgZ(32,"span",23),t._uU(33),t.qZA()()(),t.TgZ(34,"li",9)(35,"a",24),t._UZ(36,"i",25),t.TgZ(37,"span",23),t._uU(38),t.qZA()()(),t.TgZ(39,"li",26),t._UZ(40,"i",27)(41,"i",28)(42,"i",29)(43,"i",30)(44,"i",31),t.qZA(),t.TgZ(45,"li",9)(46,"span",32),t.NdJ("click",function(){return r.signOut()}),t._uU(47,"Sign Out"),t.qZA()()()()()()),2&n&&(t.xp6(33),t.Oqu(r.wishNum),t.xp6(5),t.Oqu(r.cartNum))},dependencies:[p.ez,o.rH,o.Od],styles:["nav[_ngcontent-%COMP%]{transition:padding 1s}"]})}return s})();var c=i(7913);let g=(()=>{class s{goToUp(){window.scrollTo(0,0)}static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid","main-section"],[1,"btn-up",3,"click"],[1,"fa-solid","fa-angle-up"]],template:function(n,r){1&n&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return r.goToUp()}),t._UZ(5,"i",2),t.qZA())},dependencies:[p.ez,a,c.c,o.lC],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.main-section[_ngcontent-%COMP%]{padding-top:80px}.btn-up[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;z-index:99;width:40px;height:40px;display:flex;justify-content:center;align-items:center;border-radius:10px;background-color:#0aad0a;border:unset;font-size:20px;color:#fff}"]})}return s})()}}]);