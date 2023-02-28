import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Product } from "src/app/interfaces/product.interface";


@Injectable()
export class productService{


constructor(private httpClient: HttpClient){}

private url="https://fakestoreapi.com/products"

get products():Observable<Product[]>{

return this.httpClient.get<Product[]>(this.url)
}

public findProductForId(indice:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.url}/${indice}`)
}
}