import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesContainer, Message } from '../models/mensaje.model';
import { BehaviorSubject, Observable, Subscription, timer, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Postmessage } from '../models/mensaje.model';
import { switchMap, catchError, retryWhen, delayWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);

  private baseUrl = 'http://localhost:3000'; // Ajusta a tu URL base

  constructor(private http: HttpClient) {}
  public messages$ = this.messagesSubject.asObservable();
  
  isValidPostmessage(data: Postmessage): boolean {
    return data.numbers.every(number => /^\d+$/.test(number));
  }

  sendMessage(numbers: string[], message: string): void {
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json'
    });

    const body : Postmessage = {
      numbers,
      message
    };

    if (!this.isValidPostmessage(body)) {
        console.error('Mensaje inválido: ',body);
        return;
    }

    this.http.post<any>(`${this.baseUrl}/sendMessage`, body, { headers: headers, withCredentials: true })
      .subscribe(
        response => {
          console.log('Mensaje enviado:', response);
        },
        error => {
          console.error('Error al enviar mensaje:', error);
        }
      );
  }

  waitForMessage(): void {
    this.http.get<MessagesContainer>(`${this.baseUrl}/api/wait-for-message/`)
      .subscribe(
        data => {
          console.log('Mensaje recibido:', data.tomessages);
          this.messagesSubject.next(data.tomessages);
          this.waitForMessage(); // Recursivamente esperar por el próximo mensaje
        },
        error => {
          console.error('Error al esperar mensaje:', error);
          // Implementa una estrategia de reintento si es necesario
        }
      );
  }

 
}
