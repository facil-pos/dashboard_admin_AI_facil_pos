import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';
import { TrainingYoutubeComponent } from './youtube/training-youtube.component';
import { TrainingloomComponent } from './loom/training-loom.component';
import { TrainingdriveComponent } from './drive/training-drive.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      {
        path: 'youtube',
        component: TrainingYoutubeComponent,
      },
      {
        path: 'loom',
        component: TrainingloomComponent,
      },
      {
        path: 'google_drive',
        component: TrainingdriveComponent,
      },
      /*       {
        path: 'training-drive',
        component: PrivatetrainingComponent,
      },
      {
        path: 'training-loom',
        component: DrawertrainingComponent,
      },
 */
      { path: '', redirectTo: 'private-training', pathMatch: 'full' },
      { path: '**', redirectTo: 'private-training', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
