import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  public getToken(): string | undefined {
    try {
      const lsValue = localStorage.getItem(this.authLocalStorageToken);
      if (!lsValue) {
        return undefined;
      }

      const userData = JSON.parse(lsValue);
      return userData?.refreshToken;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service
    const authToken = this.getToken();
    
    // If the token exists, clone the request and set the new header in one step
    const authReq = authToken ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
        'Access-Control-Allow-Origin' : '*'
      }
    }) : req;

    // Send cloned request with header to the next handler
    return next.handle(authReq);
  }
}
