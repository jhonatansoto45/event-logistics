import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CreateUserType,
  Perfiles,
} from 'src/app/interfaces/event-logistic.interface';
import { GeneralService } from 'src/app/services/general.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  visiblePassword: boolean = false;

  typeInput: string = 'password';

  miFormulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {}

  get changeIcon() {
    return this.visiblePassword ? 'eye-off' : 'eye';
  }

  changeType(): void {
    this.visiblePassword = !this.visiblePassword;
    this.typeInput = this.visiblePassword ? 'text' : 'password';
  }

  fieldInvalid(field: string): boolean | null | undefined {
    return (
      this.miFormulario.get(field)?.errors &&
      this.miFormulario.get(field)?.touched
    );
  }

  createAccount(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const password = this.miFormulario.get('password')?.value.trim();
    const password2 = this.miFormulario.get('password2')?.value.trim();

    if (password !== password2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas son diferentes, por favor verifica que sean iguales.',
      });
      return;
    }

    const newUser: CreateUserType = {
      usuario: this.miFormulario.get('usuario')?.value.trim().toLowerCase(),
      nombre: this.miFormulario.get('nombre')?.value.trim(),
      apellido: this.miFormulario.get('apellido')?.value.trim(),
      Correo: this.miFormulario.get('apellido')?.value.trim(),
      contrasena: password,
      perfil: Perfiles.asistente,
    };

    this.createUser(newUser);
  }

  createUser(params: CreateUserType): void {
    this.generalService.createUser(params).subscribe((user: any) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${user.response}`,
        showConfirmButton: false,
        timer: 1500,
      });
    });

    this.login();
  }

  login(): void {
    this.router.navigate(['/auth/users/login']);
  }
}
