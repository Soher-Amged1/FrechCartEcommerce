import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/core/interface/cart';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent {
  constructor(private _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute){}
  pId!:string;
  pInfo!:Brand;
  errMessage!:string;
  ngOnInit(): void {
    this.pId=this._ActivatedRoute.snapshot.params['bId'];
  console.log(this._ActivatedRoute.snapshot.params['bId']);
    this._ProductService.getSpecBrand(this.pId).subscribe({
      next:(res)=>{
    
        this.pInfo=res.data
      },
      error:(err)=>{
        console.log(err.error.message);
        this.errMessage=err.error.message
      }
    })
  }
  
}
