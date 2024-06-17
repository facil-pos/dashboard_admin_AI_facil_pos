import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataTablesResponse, IResModel } from '../model/doctuments.model';
import { mockDocs, mockDataTablesResponse } from '../data/mock-data';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(
    id: 1 | 2 | 3,
    dataTablesParameters: any
  ): Observable<DataTablesResponse> {
    return this.getDoc(id).pipe(
      map((response) => {
        const data = response ? response.docs : [];

        const dataRes: DataTablesResponse = {
          draw: dataTablesParameters.draw,
          recordsTotal: data?.length,
          recordsFiltered: data?.length,
          data: data,
        };
        return dataRes;
      })
    );
  }

  getDocs(dataTablesParameters?: any): Observable<DataTablesResponse> {
    return forkJoin({
      loom: this.getDoc(1),
      youtube: this.getDoc(2),
      drive: this.getDoc(3),
    }).pipe(
      map((responses: any) => {
        const loomDocIndex = mockDocs.findIndex((doc) => doc.name === 'Loom');
        const youtubeDocIndex = mockDocs.findIndex(
          (doc) => doc.name === 'Youtube'
        );
        const driveDocIndex = mockDocs.findIndex((doc) => doc.name === 'drive');

        if (loomDocIndex !== -1) {
          mockDocs[loomDocIndex].docs = responses.loom.docs;
        }
        if (youtubeDocIndex !== -1) {
          mockDocs[youtubeDocIndex].docs = responses.youtube.docs;
        }
        if (driveDocIndex !== -1) {
          mockDocs[driveDocIndex].docs = responses.drive.docs;
        }

        mockDataTablesResponse.data = mockDocs;
        return mockDataTablesResponse;
      }),
      catchError(this.handleError)
    );
  }

  getDoc(id: 1 | 2 | 3): Observable<IResModel> {
    const map_type: { [key: number]: string } = {
      1: 'loom',
      2: 'youtube',
      3: 'drive',
    };

    const map_obj = {
      1: {
        id: 1,
        name: 'loom',
        created_at: '',
        updated_at: '',
        docs: [],
      },
      2: {
        id: 2,
        name: 'youtube',
        created_at: '',
        updated_at: '',
        docs: [],
      },
      3: {
        id: 3,
        name: 'drive',
        created_at: '',
        updated_at: '',
        docs: [],
      },
    };

    return this.http
      .post<IResModel>(`${this.apiUrl}/documents`, {
        type: map_type[id],
      })
      .pipe(
        catchError((error) => {
          console.error('An error occurred', error);
          // Devolver el objeto base en caso de error
          return of(map_obj[id] as IResModel);
        })
      );
  }

  createDocs(doc: IResModel): Observable<IResModel> {
    mockDocs.push(doc);
    return of(doc);
  }

  updateDocs(id: number, role: IResModel): Observable<IResModel> {
    const index = mockDocs.findIndex((r) => r.id === id);
    if (index !== -1) {
      mockDocs[index] = role;
    }
    return of(role);
  }


  /*   delete(role_id: number, doc_id: string): Observable<void> {
    console.log('delete', role_id, doc_id);

    this.http
      .get<IResModel>(`${this.apiUrl}/delete-loom-document/${doc_id}`)
      .pipe(
        map((apiResponse: any) => {
          const loomDocIndex = mockDocs.findIndex((doc) => doc.name === 'Loom');
          if (loomDocIndex !== -1) {
            mockDocs[loomDocIndex].docs = apiResponse.docs;
          }
          mockDataTablesResponse.data = mockDocs;
          return mockDataTablesResponse;
        }),
        catchError(this.handleError)
      );
    const role = mockDocs.find((r) => r.id === role_id);
    if (role) {
      const userIndex = role.docs.findIndex((u) => u.id === doc_id);
      console.log('index', userIndex);
      if (userIndex !== -1) {
        role.docs.splice(userIndex, 1);
      }
    }
    return of();
  } */

  // Métodos para eliminar documentos
  deleteLoomDoc(doc_id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/delete-loom-document/${doc_id}`)
      .pipe(catchError(this.handleError));
  }

  deleteYoutubeDoc(doc_id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/delete-youtube-document/${doc_id}`)
      .pipe(catchError(this.handleError));
  }

  deleteDriveDoc(doc_id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/delete-drive-document/${doc_id}`)
      .pipe(catchError(this.handleError));
  }

  deleteDoc(document_id: string, type: string): Observable<void> {
    // Construir los parámetros de consulta
    const params = new HttpParams().set('document_id', document_id);

    // Hacer la solicitud DELETE
    return this.http
      .delete<void>(`${this.apiUrl}/documents/${type}`, { params })
      .pipe(catchError(this.handleError));
  }

  deleteDocs(id: 1 | 2 | 3, doc_id: string): Observable<void> {
    const map: { [key: number]: (doc_id: string) => Observable<void> } = {
        1: (doc_id: string) => this.deleteDoc(doc_id, 'loom'),
        2: (doc_id: string) => this.deleteDoc(doc_id, 'youtube'),
        3: (doc_id: string) => this.deleteDoc(doc_id, 'drive'),
    };

    return map[id](doc_id);
  }
  // Manejo de errores
  private handleError(error: any) {
    console.error('An error occurred', error);
    return [];
  }
}
