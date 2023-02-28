import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { productService } from '../product/services/product.service';
import {DescriptionRoutingModule } from './description-routing.module';
import { MatCardModule} from '@angular/material/card'
import { MatInput, MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'  
import { MatButtonModule} from '@angular/material/button'  
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion.component';


@NgModule({
  declarations: [
    DescripcionComponent
  ],
  imports: [
   DescriptionRoutingModule,HttpClientModule,MatCardModule,MatInputModule,MatIconModule,MatButtonModule,CommonModule
  ],
  exports:[MatCardModule,MatIconModule,MatInputModule,MatButtonModule,DescripcionComponent],
  providers:[productService]
})
export class DescriptionModule { }
