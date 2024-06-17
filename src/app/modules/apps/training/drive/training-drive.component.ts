import { Component, HostBinding, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from '../service/apiTraining.service';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService, UserType } from '../../../auth/services/auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent, SwalPortalTargets  } from '@sweetalert2/ngx-sweetalert2';

import { checkIsActive } from '../service/checkUrl.service';

@Component({
  selector: 'app-training-drive',
  templateUrl: './training-drive.component.html',
  styleUrls: ['./training-drive.component.scss'],
})
export class TrainingdriveComponent implements OnInit, OnDestroy {
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('errorSwal') private errorSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @HostBinding('class') class = 'd-flex flex-column flex-lg-row';
  userSubscription: Subscription;
  messageSubscription: Subscription;
  userId: number | undefined;
  username: string | undefined;
  resultText: string = 'Resultado de la consulta... ';
  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef, public readonly swalTargets: SwalPortalTargets, private auth: AuthService, private apiService: ApiService) {}


  ngOnInit(): void {
    this.userSubscription = this.auth.currentUserSubject.subscribe((user: UserType) => {
      if (user) {
        this.userId = user.id;
        this.username = user.username;

        console.log('Usuario ID:', this.userId, 'Username:', this.username);

      }

    });

    console.log(checkIsActive(this.router.url,'/apps/training/loom'));

  }

  onSubmit(loomForm: NgForm): void {
    if (loomForm.valid) {
      const link = loomForm.value.link;
      const nombre = loomForm.value.videoName
      console.log('Formulario enviado con el link:', link);
      this.loadingSwal.fire(); 

      this.apiService.sendLinkDrive(link, nombre).subscribe(
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

