import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  openFavorites$: Subject<boolean> = new Subject<boolean>();

  private _listCard: CardItem[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 9,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 10,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
  ];

  constructor() {}

  get cardEvent() {
    return this._listCard;
  }
}
