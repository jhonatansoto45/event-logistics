import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

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

    const username = this.miFormulario.get('username')?.value;
    const password = this.miFormulario.get('password')?.value;
  }
}
