import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';
import { UserType } from '../auth.service';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(email: string, password: string): Observable<any> {
    const url = `${API_USERS_URL}/login`;
    const body = new URLSearchParams();
    body.set('grant_type', '');
    body.set('username', email);
    body.set('password', password);
    body.set('scope', '');
    body.set('client_id', '');
    body.set('client_secret', '');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post<any>(url, body.toString(), { headers });
  }
  // public methods
  logout() {
    return this.http.post(`${API_USERS_URL}/logout`, {});
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
      email,
    });
  }

  getUserByToken(): Observable<UserType> {
    return this.http.get<UserType>(`${API_USERS_URL}/me`);
  }
}
