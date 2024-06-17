import { Component, HostBinding, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from '../Services/apiMensajes.service';
import { Message } from '../models/mensaje.model';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService, UserType } from '../../../auth/services/auth.service'

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss'],
})
export class PrivateChatComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-lg-row';
  messages: Message[] = []; // interfaz Message
  userSubscription: Subscription;
  messageSubscription: Subscription;
  userId: number | undefined;
  username: string | undefined;
  constructor(private changeDetectorRef: ChangeDetectorRef, private auth: AuthService, private apiService: ApiService) {}
  

  ngOnInit(): void {
    this.userSubscription = this.auth.currentUserSubject.subscribe((user: UserType) => {
      if (user) {
        this.userId = user.id;
        this.username = user.username;

        console.log('Usuario ID:', this.userId, 'Username:', this.username);
 
      }

    });

    // Suponiendo que waitForMessage prepara la recepción de mensajes
    this.apiService.waitForMessage(); 

    // Suscripción independiente para mensajes
    this.messageSubscription = this.apiService.messages$.subscribe(messages => {
      this.messages = messages;
      this.changeDetectorRef.detectChanges();
    });
    console.log('Mensajes recibidos desde componentes:', this.messages);
  }
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}

