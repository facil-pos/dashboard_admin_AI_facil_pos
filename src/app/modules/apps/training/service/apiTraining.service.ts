import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, timer, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';

interface Sendlink {
  url: string;
  name : string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl; // Ajusta a tu URL base

  constructor(private http: HttpClient) {}

  sendLinkYoutube(link: string, nombre: string): Observable<any> {
    
    const body: Sendlink = { url: link, name: nombre };
    console.log('Body youtube', body);

    return this.http.post<any>(`${this.baseUrl}/process-youtube-video`, body);
  
  }

  sendLinkLoom(link: string, nombre: string): Observable<any> {

    const body: Sendlink = { url : link, name : nombre };
    console.log('Body loom', body);
    
    return this.http.post<any>(`${this.baseUrl}/process-loom-video`, body);
  
  }


  sendLinkDrive(link: string, nombre: string): Observable<any> {

    const body: Sendlink = { url : link, name : nombre };
    return this.http.post<any>(`${this.baseUrl}/process-doc`, body);

  }

}
