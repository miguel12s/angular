import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';

import { productService } from '../header/services/product.service';
@Component({
  selector: 'app-cart',
  
  
  template:`
    <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
    <ng-container *ngIf="dataCart.total">
      <mat-icon>add_shopping_cart</mat-icon>
    {{dataCart.total | currency}}
    ({{dataCart.quantity}})
    </ng-container>

  </ng-container>`
  
  ,
  styles:[]
})
export class CartComponent {
  constructor(private productService:productService){}
  quantity$=this.productService.quantityObservable
  total$=this.productService.priceObservable

  
}
