
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'  
import {MatButtonModule} from '@angular/material/button'  

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})



export class MaterialModule{}