import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralService } from '../services/general.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private generalService: GeneralService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    const token = this.generalService.getToken();
    if (!token) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
