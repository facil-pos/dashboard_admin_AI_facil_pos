import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogflow',
  templateUrl: './dialogflow.component.html',
  styleUrls: ['./dialogflow.component.scss']
})
export class DialogflowComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Add event listener to send a welcome message once the Dialogflow Messenger is loaded
    console.log('Component initialized');

    setTimeout(() => {
      window.addEventListener('df-messenger-loaded', () => {
        console.log('Chat iniciado');
        const chatBox = document.querySelector('df-messenger') as any;
        chatBox?.renderCustomText('Hola, ¿en qué puedo ayudarte hoy?');
      });
    }, 1000);
  }
}
