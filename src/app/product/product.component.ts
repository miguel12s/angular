import { Component, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { DescripcionComponent } from '../descripcion/descripcion.component';
import { Product } from '../interfaces/product.interface';
import { rateCount } from '../interfaces/rate.interface';
import { productService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent {
  products:any=[]
  numberOfStairs:number[]=[]
  constructor(private productService:productService,private descriptionComponent:DescripcionComponent){}
  ngOnInit(){

    this.productService.products.pipe(
      tap((data:Product[])=>this.products=data,
      
      )
     
    ).subscribe()
  }
paintStars(star:rateCount):number[]{
  
   this.numberOfStairs=this.descriptionComponent.paintStars(star)
   console.log(this.numberOfStairs);
   
        
   return this.numberOfStairs
}
}
