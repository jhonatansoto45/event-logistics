import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  capitalizeText(text: string): string {
    return text[0].toUpperCase() + text.substring(1);
  }
}
