import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { productService } from './product/services/product.service';
import {  HttpClientModule } from '@angular/common/http';
import { DescripcionComponent } from './descripcion/descripcion.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [productService],
  bootstrap: [AppComponent,DescripcionComponent]
})
export class AppModule { }
