import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'products',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  {path:'products/description',loadChildren:()=>import('./descripcion/description.module').then (m=>m.DescriptionModule)},
  
  {path:'',redirectTo:'products',pathMatch:'full'},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
