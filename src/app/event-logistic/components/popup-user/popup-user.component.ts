import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthUser } from '../../../interfaces/event-logistic.interface';
import { GeneralService } from '../../../services/general.service';

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

  @Output() listeningPopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private generalService: GeneralService, private router: Router) {}

  ngOnInit(): void {
    this.userData =
      this.generalService.decryption('info') &&
      this.generalService.decryption('info')!;
  }

  closePopup(): void {
    this.listeningPopup.emit(true);
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
