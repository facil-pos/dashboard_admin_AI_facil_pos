import { Component, HostBinding, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from '../service/apiTraining.service';
import { AuthService, UserType } from '../../../auth/services/auth.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  youtubeForm: FormGroup;
  errorStatus : boolean = false;

  constructor(
    private fb: FormBuilder,  
    private changeDetectorRef: ChangeDetectorRef, 
    public readonly swalTargets: SwalPortalTargets, 
    private auth: AuthService, 
    private apiService: ApiService
  ) {}


  ngOnInit(): void {
    this.userSubscription = this.auth.currentUserSubject.subscribe((user: UserType) => {
      if (user) {
        this.userId = user.id;
        this.username = user.username;

        console.log('Usuario ID:', this.userId, 'Username:', this.username);
      }
    });

    this.youtubeForm = this.fb.group({
      link: [
        '',
        [Validators.required, Validators.pattern('^(https?://)?(www.youtube.com|youtu.?be)/.+$')]
      ],
      videoName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ]
    });
  }

  get link() {
    return this.youtubeForm.get('link')!;
  }

  get videoName() {
    return this.youtubeForm.get('videoName')!;
  }

  onSubmit(): void {
    if (this.youtubeForm.valid) {
      const link = this.youtubeForm.value.link;
      const nombre = this.youtubeForm.value.videoName;
      console.log('Formulario enviado con el link:', link);
      this.loadingSwal.fire(); 

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
      this.youtubeForm.markAllAsTouched();
      console.log('Formulario no válido', this.youtubeForm);
      this.errorStatus = this.youtubeForm.status === "INVALID";
      this.changeDetectorRef.detectChanges();
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

