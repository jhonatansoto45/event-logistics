import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('comprobacion de capitalizacion', () => {
  const text = service.capitalizeText('este es mi texto');
  expect(text).toBe('Este Es Mi Texto');
  });
});
