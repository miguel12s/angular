import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
spinnerService=inject(SpinnerService)
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
this.spinnerService.callSpinner()
return next.handle(req).pipe(
  finalize(()=>{this.spinnerService.stopSpinner()})
)
  }
}
