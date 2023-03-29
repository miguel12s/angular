import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { rateCount } from '../interfaces/rate.interface';
import { productService } from '../header/services/product.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class DescripcionComponent implements OnInit {
  indice!: number;
  products: Product[]=[
    
  ]
  counter: number = 0;
  ngOnInit(): void {

    this.productService.cartObservable
      .pipe(
        tap((product: Product[]) => {
          
          this.products = product;
          console.log(this.products)
          
        })
      )
      .subscribe();
  }
  constructor(
    private productService: productService,private toastrService:ToastrService,
    private router:Router,
    private cdr: ChangeDetectorRef
  ) {}

  paintStars(numberStairs: rateCount): Array<number> {

    let stairs = String(numberStairs);

    let array = stairs.split('.');

    let porcentStair = Number(array[1]) / 10;
    const numberstairs =
      Number(porcentStair) < 0.4
        ? Math.floor(Number(numberStairs))
        : Math.ceil(Number(numberStairs));

    let numberOfStairs = [];
    for (let index = 0; index < numberstairs; index++) {
      numberOfStairs[index] = Math.random();
    }

    return numberOfStairs;
  }
 

  addQty(product:Product){
this.productService.updateQty(product)

  }

  deleteQty(product:Product){
    this.productService.deleteQty(product)
  }

  deleteProduct(product:Product){
    Swal.fire({
      title: 'Estas seguro',
      text: "No podras revertirlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si deseo borrarlo'
    }).then(async(result:any) => {
      if (result.isConfirmed) {
        console.log('entras');
        
        this.productService.deleteProduct(product)
        this.cdr.detectChanges()

        Swal.fire(
          'Eliminando',
          'Tu producto ha sido eliminado',
          'success',
          
        )

      }
    })   

  }

  finishShoppingCard():void{
    Swal.fire("Compra realizada", "Compra realizada con exito. Se reiniciara el carrito", "success")

this.productService.resetCart()
this.router.navigate(['/products'])






  }





  
}
