import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
<app-header/>
<router-outlet></router-outlet>

  
  
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  

 

  // addCartToClick(product: Product): void {
  //   this.productService.addToCart(product);
  // }
}
