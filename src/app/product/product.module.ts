import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DescripcionComponent } from '../descripcion/descripcion.component';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { productService } from './services/product.service';



@NgModule({
  declarations: [
ProductComponent
  ],
  imports: [
    ProductRoutingModule,MatCardModule,MatInputModule,MatIconModule,MatButtonModule,CommonModule
  ],
  exports:[ProductComponent],
  providers:[productService,DescripcionComponent]  
})
export class ProductModule { }
