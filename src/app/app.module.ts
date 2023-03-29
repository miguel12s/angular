import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DescriptionModule } from './descripcion/description.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { ProductModule } from './product/product.module';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InterceptorService } from './product/services/interceptor.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent,CartComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DescriptionModule,
    MatToolbarModule,
    FormsModule,
    ProductModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot()
    


  ],
  

  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
