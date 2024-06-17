import { Component, HostBinding, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from '../service/apiTraining.service';
import { AuthService, UserType } from '../../../auth/services/auth.service'
import { NgForm } from '@angular/forms';

import { SwalComponent, SwalPortalTargets  } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-training-youtube',
  templateUrl: './training-youtube.component.html',
  styleUrls: ['./training-youtube.component.scss'],
})
export class TrainingYoutubeComponent implements OnInit, OnDestroy {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('errorSwal') private errorSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;

  @HostBinding('class') class = 'd-flex flex-column flex-lg-row';
  userSubscription: Subscription;
  messageSubscription: Subscription;
  userId: number | undefined;
  username: string | undefined;
  resultText: string = 'Resultado del analisis del video... ';

  constructor(private changeDetectorRef: ChangeDetectorRef, private auth: AuthService, public readonly swalTargets: SwalPortalTargets, private apiService: ApiService) {}


  ngOnInit(): void {
    this.userSubscription = this.auth.currentUserSubject.subscribe((user: UserType) => {
      if (user) {
        this.userId = user.id;
        this.username = user.username;

        console.log('Usuario ID:', this.userId, 'Username:', this.username);

      }

    });
  }

  onSubmit(youtubeForm: NgForm): void {
    if (youtubeForm.valid) {
      const link = youtubeForm.value.link;
      const nombre = youtubeForm.value.videoName
      console.log('Formulario enviado con el link:', link);
      this.loadingSwal.fire(); 
      // Aquí puedes manejar el envío del formulario, por ejemplo, llamando a un servicio de API
      this.apiService.sendLinkYoutube(link, nombre).subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          this.resultText = response.response;
          this.loadingSwal.close(); 
          this.successSwal.fire();
          this.changeDetectorRef.detectChanges();
        },
        error => {
          console.log('Error:', error.error.detail.response);
          this.resultText = `Hubo un problema al enviar el link. ${error.error.detail.response}`; 
          this.loadingSwal.close(); 
          this.errorSwal.fire(); 
          this.changeDetectorRef.detectChanges();
        }
      );
    } else {
      console.log('Formulario no válido');
    }
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

