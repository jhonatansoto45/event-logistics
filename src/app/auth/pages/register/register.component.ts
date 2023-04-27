import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  visiblePassword: boolean = false;

  typeInput: string = 'password';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]],
  });

  password2!: FormControl;

  constructor(private router: Router, private fb: FormBuilder) {}

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

    const nombre = this.miFormulario.get('nombre')?.value.trim();
    const apellido = this.miFormulario.get('apellido')?.value.trim();
    const password = this.miFormulario.get('password')?.value.trim();
  }

  login(): void {
    this.router.navigate(['/auth/users/login']);
  }
}
