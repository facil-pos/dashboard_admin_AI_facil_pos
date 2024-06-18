import { Component, ViewChild , HostBinding, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from '../service/apiTraining.service';
import { AuthService, UserType } from '../../../auth/services/auth.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { SwalComponent, SwalPortalTargets  } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-training-loom',
  templateUrl: './training-loom.component.html',
  styleUrls: ['./training-loom.component.scss'],
})
export class TrainingloomComponent implements OnInit, OnDestroy {
  
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('errorSwal') private errorSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;

  @HostBinding('class') class = 'd-flex flex-column flex-lg-row';
  userSubscription: Subscription;
  messageSubscription: Subscription;
  userId: number | undefined;
  username: string | undefined;
  resultText: string = 'Resultado del análisis del video... ';
  loomLinkForm: FormGroup;
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

    this.loomLinkForm = this.fb.group({
      link: [
        '',
        [Validators.required, Validators.pattern('https://www.loom.com/share/.*')]
      ],
      videoName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ]
    });
  }

  get link() {
    return this.loomLinkForm.get('link')!;
  }

  get videoName() {
    return this.loomLinkForm.get('videoName')!;
  }

  onSubmit(): void {
    if (this.loomLinkForm.valid) {
      const link = this.loomLinkForm.value.link;
      const nombre = this.loomLinkForm.value.videoName;
      console.log('Formulario enviado con el link:', link);
      this.loadingSwal.fire(); 

      this.apiService.sendLinkLoom(link, nombre).subscribe(
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
      this.loomLinkForm.markAllAsTouched();
      console.log('Formulario no válido', this.loomLinkForm);
      this.errorStatus = this.loomLinkForm.status === "INVALID";
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