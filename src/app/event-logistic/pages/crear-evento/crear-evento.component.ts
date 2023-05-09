import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupTemplateComponent } from '../../../shared/popup-template/popup-template.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
})
export class CrearEventoComponent {
  @ViewChild('invitadosTemplate') invitadosTemplate!: TemplateRef<any>;

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    fecha: ['', Validators.required],
  });

  selectedRows: any[] = [];

  list = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private homeService: HomeService
  ) {}

  get listUsers() {
    return this.homeService.usersList;
  }

  openComInvited(): void {
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
        console.log(this.selectedRows);

        sub1.unsubscribe();
        cf.destroy();
      }
    });
  }

  fieldInvalid(field: string): boolean | null | undefined {
    return (
      this.miFormulario.get(field)?.errors &&
      this.miFormulario.get(field)?.touched
    );
  }

  saveEvent(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
  }

  test(e: any) {
    console.log(e);
  }
}
