import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  capitalizeText(text: string): string {
    const preText = text.trim().split(' ');
    const arrayTemp: string[] = [];

    for (let i = 0; i < preText.length; i++) {
      const element = preText[i][0].toUpperCase() + preText[i].substring(1);
      arrayTemp.push(element);
    }

    return arrayTemp.join(' ');
  }
}
