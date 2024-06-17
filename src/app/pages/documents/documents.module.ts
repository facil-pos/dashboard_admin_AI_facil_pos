import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsListingComponent } from './documents-listing/documents-listing.component';
import { DocumentsDetailsComponent } from './documents-details/documents-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbNavModule, NgbDropdownModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { CrudModule } from 'src/app/modules/crud/crud.module';



@NgModule({
  declarations: [DocumentsDetailsComponent, DocumentsListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DocumentsListingComponent,
      },
      {
        path: ':id',
        component: DocumentsDetailsComponent,
      },
    ]),
    CrudModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
  ]
})
export class DocumentModule { }
