import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interface/category';
import { RouterLink } from '@angular/router';

ProductService
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private _ProductService:ProductService){}
  errMessage!:string;
  catsgoryData:Category[]=[]
  ngOnInit(): void {
    this._ProductService.getCategories().subscribe({
      next:(res)=>{
        this.catsgoryData=res.data;
      },
      error:(err)=>{
    this.errMessage=err.error.message
      }
    })
    
  }

}
