import {  Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { productService } from '../../header/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../services/spinner.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  pageInit = true;
  products: Product[] = [
    {  id:1,
      title:'',
      price:0,
      category:'',
      description:'',
      image:'',
    rating:[],
  qty:0}
  ];
  categories: Array<string> = [];
  categorie = '';
  page = 0;
  dat = 0;
  searche: string = '';
  spinnerService=inject(SpinnerService)
  constructor(
    private productService: productService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.productService.products
      .pipe(
        tap((data: Product[]) => (this.products = data)),
        tap((data: Product[]) =>
          data.forEach((element: Product) => {
            this.dat = element.id - 1;

            this.products[this.dat].title = element.title.toLowerCase();
          })
        )
      )

      .subscribe();

    this.productService.categories
      .pipe(tap((data: Array<string>) => (this.categories = data)))
      .subscribe();
  }

  quantity$ = this.productService.quantityObservable;
  price$ = this.productService.priceObservable;

  addCartToClick(product: Product): void {
    this.productService.addToCart(product);
    this.toaster.success(` ${product.title} `, 'Added to card', {
      positionClass: 'toast-bottom-right',
      timeOut: 1200,
    });
  }

  increment(): void {
    this.page += 6;
    this.pageInit = false;
  }

  decrement(): void {
    if (this.page > 0) {
      this.page -= 6;
      this.pageInit = false;
    }
    if (this.page == 0) {
      this.pageInit = true;
    }
  }

  searchProducts(search: string) {
    console.log(search);

    this.searche = search;
  }

  filterCategory(category: string) {
    this.categorie = category;
  }
}
