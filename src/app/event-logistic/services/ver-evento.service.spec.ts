import { TestBed } from '@angular/core/testing';

import { VerEventoService } from './ver-evento.service';

describe('VerEventoService', () => {
  let service: VerEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
