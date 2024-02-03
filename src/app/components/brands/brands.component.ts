import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brand } from 'src/app/core/interface/cart';
import { ProductService } from 'src/app/core/services/product.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands : Brand [] = []
  errMessage!:string;
  constructor(private _ProductService:ProductService){
    
  }
  ngOnInit(): void {
    this._ProductService.getBrands().subscribe({
      next:(res)=>{
        this.brands=res.data
        
          },
          error:(err)=>{
        this.errMessage=err.error.message
          }
})
}
}
