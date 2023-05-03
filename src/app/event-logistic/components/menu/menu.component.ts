import { Component } from '@angular/core';

import { MenuItem } from 'src/app/interfaces/event-logistic.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      name: 'Inicio',
      route: '/eventos/manage/inicio',
    },
    {
      name: 'Crear Evento',
      route: '/eventos/manage/crear',
    },
    {
      name: 'Ver eventos',
      route: '/eventos/manage/ver',
    },
  ];

  visiblePopup: boolean = false;
  visibleFavorites: boolean = false;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  openPopup(): void {
    this.visiblePopup = true;
  }

  disabledPopup(): void {
    this.visiblePopup = false;
  }

  openFavorites(): void {
    this.homeService.openFavorites$.next(true);
  }
}
