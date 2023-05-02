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
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1612893201883-c3f1fb4265d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 7,
      image:
        'https://plus.unsplash.com/premium_photo-1664790560098-1fac17eb495e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1642784353782-91bfdd65920c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 9,
      image:
        'https://images.unsplash.com/photo-1628436174535-19751abe2799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 10,
      image:
        'https://images.unsplash.com/photo-1569863959165-56dae551d4fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
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
