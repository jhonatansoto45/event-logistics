import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/environment';
import {
  AuthLogin,
  AuthUser,
  CreateUserType,
} from '../interfaces/event-logistic.interface';

import Swal from 'sweetalert2';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  //* TOKEN
  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    return token
      ? JSON.parse(AES.decrypt(token!, 'token#').toString(enc.Utf8))
      : [];
  }

  setToken(token: string): void {
    sessionStorage.setItem(
      'token',
      AES.encrypt(JSON.stringify(token).toString(), 'token#').toString()
    );
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  //*ENCRYPTION
  encryption(data: any, key: string): void {
    sessionStorage.setItem(
      key,
      AES.encrypt(JSON.stringify(data).toString(), `${key}#`).toString()
    );
  }

  decryption(key: string): any {
    const value = sessionStorage.getItem(key);
    return value
      ? JSON.parse(AES.decrypt(value!, `${key}#`).toString(enc.Utf8))
      : [];
  }

  clearSession(): void {
    sessionStorage.clear();
  }

  //* PETICIONES
  getUser(user: AuthLogin): Observable<AuthUser> {
    const body = user;
    return this.http
      .post<AuthUser>(`${this.baseUrl}/api/auth`, JSON.stringify(body))
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  createUser(newUser: CreateUserType): Observable<CreateUserType> {
    const body = newUser;
    return this.http
      .post<CreateUserType>(
        `${this.baseUrl}/api/users/new`,
        JSON.stringify(body)
      )
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  private handleError(err: HttpErrorResponse) {
    if (err.status !== 200) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err?.error?.Error}`,
      });
    }
    return throwError(() => err);
  }
}
