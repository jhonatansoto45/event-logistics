import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
})
export class CrearEventoComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    fecha: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

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
}
