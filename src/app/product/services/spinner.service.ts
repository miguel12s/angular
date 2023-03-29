import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService  {

  constructor(private spinnerService:NgxSpinnerService) { }
 
  callSpinner(){
this.spinnerService.show()
  }
  stopSpinner(){
this.spinnerService.hide()
  }
}
