import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { GeneralService } from '../../services/general.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  visiblePassword: boolean = false;

  typeInput: string = 'password';

  miFormulario: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService,
    private authService: AuthService,
    private router: Router
  ) {}

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

  sendLogin(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const username = this.miFormulario.get('username')?.value.trim();
    const password = this.miFormulario.get('password')?.value.trim();

    this.generalService
      .getUser({ usuario: username, contrasena: password })
      .subscribe(({ token, nombre, apellido, perfil }) => {
        if (!token) return;
        this.successFullUser(token, nombre, apellido, perfil);
      });
  }

  successFullUser(
    token: string,
    nombre: string,
    apellido: string,
    perfil: string
  ): void {
    const user = { nombre, apellido, perfil };
    this.generalService.setToken(token);
    this.generalService.encryption(user, 'info');

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Inicio correcto ${this.authService.capitalizeText(
        nombre
      )} ${this.authService.capitalizeText(apellido)}`,
      showConfirmButton: false,
      timer: 1500,
    });
    this.router.navigate(['/eventos/manage/inicio']);
  }
}
