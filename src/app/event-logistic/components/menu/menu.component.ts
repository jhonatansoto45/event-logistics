import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import {
  AuthUser,
  MenuItem,
} from 'src/app/interfaces/event-logistic.interface';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  userData: AuthUser = {
    nombre: '',
    apellido: '',
    perfil: '',
  };

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

  constructor(private router: Router, private generalService: GeneralService) {}

  ngOnInit(): void {
    if (this.generalService.decryption('info')) {
      this.userData = this.generalService.decryption('info')!;
    }
  }

  openPopup(): void {
    this.visiblePopup = !this.visiblePopup;
  }

  disabledPopup(): void {
    this.visiblePopup = false;
  }

  logout(): void {
    Swal.fire({
      title: '¿Esta seguro que desea salir?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.generalService.removeToken();
        this.generalService.clearSession();
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
