import {  Component } from '@angular/core';
import { Router } from '@angular/router';
import { productService } from './services/product.service';

@Component({
  selector: 'app-header',
  template: `
   
    <mat-toolbar  class="d-flex " color="primary">
      <span routerLink="products" >
        My store
       
      </span>
      <div class=" d-flex contenedor  w-100 justify-content-end">
      <app-cart class="shopping-cart" (click)="goToCheckout()"></app-cart>
      </div>
         
    
    
      
     
  </mat-toolbar>

    

    
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent  {

    
  constructor(private router:Router) {} 
  goToCheckout(){
    this.router.navigate(['products/description'])
  }
}

