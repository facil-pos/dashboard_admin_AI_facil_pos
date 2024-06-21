import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DocumentService } from '../service/documents.service';
import { IResModel } from '../model/doctuments.model';

@Component({
  selector: 'app-documents-details',
  templateUrl: './documents-details.component.html',
  styleUrls: ['./documents-details.component.scss'],
})
export class DocumentsDetailsComponent implements OnInit {
  role$: Observable<IResModel>;

  datatableConfig: DataTables.Settings = {};

  // Reload emitter inside datatable
  reloadEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private apiService: DocumentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id']) as 1 | 2 | 3;
      this.role$ = this.apiService.getDoc(id);

      this.datatableConfig = {
        serverSide: true,
        ajax: (dataTablesParameters: any, callback) => {
          this.apiService
            .getUsers(id , dataTablesParameters)
            .subscribe((resp) => {
              callback(resp);
            });
        },
        columns: [
          {
            title: 'Name',
            data: 'name',
            render: function (data, type, full) {
              const colorClasses = ['success', 'info', 'warning', 'danger'];
              const randomColorClass =
                colorClasses[Math.floor(Math.random() * colorClasses.length)];

              const Label = `
              <div class="label fs-3 bg-light-${randomColorClass} text-${randomColorClass}">
                ${data}
              </div>
            `;

              return `
              ${Label}
            `;
            },
          },
          {
            title: 'Link',
            data: 'id',
            render: function (data, type, full) {
              const colorClasses = ['success', 'info', 'warning', 'danger'];
              const randomColorClass =
                colorClasses[Math.floor(Math.random() * colorClasses.length)];

              const Label = `
              <div class="label fs-3 bg-light-${randomColorClass} text-${randomColorClass}">
                <a href=${data} target="_blank"> ${data} </a>
              </div>
            `;

              return `
              ${Label}
            `;
            },
          },
          {
            title: 'Tipo',
            data: 'Type',
            render: function (data, type, row) {
              const roleName =
                row.type
                  ? row.type
                  : 'Tipo no encontrado';
              return roleName;
            },
            type: 'string',
          }
        ],
        createdRow: function (row, data, dataIndex) {
          $('td:eq(0)', row).addClass('d-flex align-items-center');
        },
      };
    });
  }

  deleteDoc(doc_id: string) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.apiService.deleteDocs(id, doc_id).subscribe(() => {
        this.reloadEvent.emit(true);
        this.apiService.getDocs()
      });
    });
  }
}
