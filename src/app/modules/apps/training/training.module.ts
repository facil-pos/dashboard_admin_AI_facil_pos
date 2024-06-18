import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingYoutubeComponent } from './youtube/training-youtube.component';
import { TrainingloomComponent } from './loom/training-loom.component';
import { TrainingdriveComponent } from './drive/training-drive.component';

import {SharedModule} from "../../../_metronic/shared/shared.module";


@NgModule({
  declarations: [
    TrainingComponent,
    TrainingYoutubeComponent,
    TrainingloomComponent,
    TrainingdriveComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TrainingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    NgbModalModule,
  ],
})
export class TrainingModule {}
