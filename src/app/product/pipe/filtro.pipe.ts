import { Pipe, PipeTransform } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {


  search:string=''
constructor(){}


  transform(product:Product[],  page:number,search:string,category:string): Product[] {

  console.log(category);
  if(category.length!=0 && search.length!=0)

  return  product.filter(products=>products.title.includes(search)) .slice(page,page+6)

  if(category=='All')
  return product.slice(page,page+6)

if (category.length!=0 )

  return product.filter(products=>products.category.includes(category)).slice(page,page+6)

 



    if(search.length==0)
   return product.slice(page,page+6)
    
   if(search.length!=0){
    return  product.filter(products=>products.title.includes(search))

   }


 
    
  
  
   

  return []
  }

}
