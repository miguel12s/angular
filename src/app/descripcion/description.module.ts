import { HttpClientModule } from '@angular/common/http';
import { NgModule  } from '@angular/core';
import { productService } from '../header/services/product.service';
import {DescriptionRoutingModule } from './description-routing.module';
import { MatCardModule} from '@angular/material/card'
import { MatInputModule} from '@angular/material/input'
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
  providers:[]
})
export class DescriptionModule { }
