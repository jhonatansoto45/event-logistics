import { Injectable } from '@angular/core';
import { CreateUserType } from 'src/app/interfaces/event-logistic.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  capitalizeText(text: string): string {
    return text[0].toUpperCase() + text.substring(1);
  }
}
