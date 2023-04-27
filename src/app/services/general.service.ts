import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthLogin, AuthUser } from '../interfaces/event-logistic.interface';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  //* TOKEN
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  //* UTILIDADES
  getUser(user: AuthLogin): Observable<AuthUser> {
    const body = user;
    return this.http
      .post<AuthUser>(`${this.baseUrl}/api/auth`, JSON.stringify(body))
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
    return throwError(err);
  }
}
