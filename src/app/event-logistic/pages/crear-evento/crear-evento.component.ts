import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { PopupTemplateComponent } from '../../../shared/popup-template/popup-template.component';
import { HomeService } from '../../services/home.service';
import {
  AttributeInputFilter,
  ColumnsPrimeNg,
} from 'src/app/interfaces/shared.interface';

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

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    fecha: ['', [Validators.required, Validators.min(new Date().getDate())]],
  });

  constructor(
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private homeService: HomeService
  ) {}

  get listUsers() {
    return this.homeService.usersList;
  }

  onChecks(dataItem: any): void {
    this.selectedRows = dataItem;
  }

  fieldInvalid(field: string): boolean | null | undefined {
    return (
      this.miFormulario.get(field)?.errors &&
      this.miFormulario.get(field)?.touched
    );
  }

  componentDynamicGuests(): void {
    this.viewContainerRef.clear();

    const cf = this.viewContainerRef.createComponent(PopupTemplateComponent);

    cf.instance.template = this.invitadosTemplate;

    const sub0 = cf.instance.onClose.asObservable().subscribe((active) => {
      if (active) {
        sub0.unsubscribe();
        cf.destroy();
      }
    });

    const sub1 = cf.instance.onSave.asObservable().subscribe((active) => {
      if (active) {
        sub1.unsubscribe();
        cf.destroy();
        if (!this.selectedRows.length) {
          Swal.fire({
            icon: 'warning',
            title: 'Debe de seleccionar los invitados al evento.',
          });
          return;
        }
      }
    });
  }

  saveEvent(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
  }
}
