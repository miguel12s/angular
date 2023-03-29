import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { DescripcionComponent } from '../descripcion/descripcion.component';
import { Product } from '../interfaces/product.interface';
import { rateCount } from '../interfaces/rate.interface';
import { productService } from '../header/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: any;
  numberOfStairs: number[] = [];
  @Output() addCartToClic = new EventEmitter<Product>();
  products: any = [];
  

  constructor(
    private descriptionComponent: DescripcionComponent,private router:Router
  ) {}

  paintStars(star: rateCount): number[] {
    this.numberOfStairs = this.descriptionComponent.paintStars(star);

    return this.numberOfStairs;
  }

  addCartToClick(product: Product): void {
    this.addCartToClic.emit(product);
  
   
  }

  // products:any = [];
  // constructor(private productService: productService) {}

  // ngOnInit() {
  //   console.log('entras a product');

  //   this.productService.products.pipe(tap((data: Product[]) => (this.products = data)))
  //     .subscribe();

  // }

  // addCartToClick(product:Product):void{
  //   console.log('producto agregado');

  //  this.productService.addToCart(product)
  // }
}
