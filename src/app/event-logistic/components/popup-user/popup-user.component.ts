import { Component, Input, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { AuthUser } from 'src/app/interfaces/event-logistic.interface';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-user',
  templateUrl: './popup-user.component.html',
  styleUrls: ['./popup-user.component.scss'],
})
export class PopupUserComponent implements OnInit {
  @Input() userData: AuthUser = {
    nombre: '',
    apellido: '',
    perfil: '',
  };

  constructor(private generalService: GeneralService, private router: Router) {}

  ngOnInit(): void {
    this.userData =
      this.generalService.decryption('info') &&
      this.generalService.decryption('info')!;
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
