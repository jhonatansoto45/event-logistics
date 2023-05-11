import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomeService } from '../../services/home.service';
import {
  AttributeInputFilter,
  ColumnsPrimeNg,
} from '../../../interfaces/shared.interface';
import { PopupService } from '../../../shared/popup/service/popup.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
})
export class CrearEventoComponent {
  @ViewChild('invitadosTemplate') invitadosTemplate!: TemplateRef<any>;
  selectedRows: any[] = [];
  gridColumns: ColumnsPrimeNg[] = [
    {
      field: 'id',
      title: 'Id',
      sortable: true,
      width: '25%',
    },
    {
      field: 'name',
      title: 'Nombre',
      sortable: true,
      width: '25%',
    },
    {
      field: 'username',
      title: 'Usuario',
      sortable: true,
      width: '25%',
    },
    {
      field: 'email',
      title: 'Email',
      sortable: true,
      width: '25%',
    },
  ];
  atrrInputFilter: AttributeInputFilter[] = [
    { field: 'id', type: 'text', placeholder: 'Buscar por id' },
    { field: 'name', type: 'text', placeholder: 'Buscar por nombre' },
    { field: 'username', type: 'text', placeholder: 'Buscar por usuario' },
    { field: 'email', type: 'text', placeholder: 'Buscar por correo' },
  ];

  formEvent: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    fecha: ['', [Validators.required, Validators.min(new Date().getDate())]],
  });

  constructor(
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private homeService: HomeService,
    private popupService: PopupService
  ) {}

  get listUsers() {
    return this.homeService.usersList;
  }

  onChecks(dataItem: any): void {
    this.selectedRows = dataItem;
  }

  fieldInvalid(field: string): boolean | null | undefined {
    return (
      this.formEvent.get(field)?.errors &&
      this.formEvent.get(field)?.touched
    );
  }

  componentDynamicGuests(): void {
    this.popupService.componentRef(this.viewContainerRef, {
      template: this.invitadosTemplate,
      title: 'Lista de invitados',
      width: '900px',
      height: '500px',
      buttons: [
        {
          icon: 'check',
          tooltip: 'Aceptar',
          click: () => {
            if (!this.selectedRows.length) {
              this.popupService.openWarning(
                'Debe de seleccionar los invitados al evento.'
              );
              return;
            }
            this.popupService.closePopup();
          },
        },
      ],
    });
  }

  saveEvent(): void {
    if (this.formEvent.invalid) {
      this.formEvent.markAllAsTouched();
      return;
    }

    if (!this.selectedRows.length) {
      this.popupService.openWarning(
        'No tiene invitados seleccionados al evento'
      );
      return;
    }
  }
}
