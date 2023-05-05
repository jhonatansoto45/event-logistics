import { TestBed } from '@angular/core/testing';
import { GeneralService } from './general.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('GeneralService', () => {
  let service: GeneralService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GeneralService);
    httpMock = TestBed.inject(HttpTestingController);
    jest.clearAllMocks();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('obtener datos del usuario', () => {
    const user = { usuario: 'johndoe', contrasena: 'password' };

    service.getUser(user).subscribe((response) => {
      console.log(response);

      expect(response).toBeTruthy();
    });

    // const req = httpMock.expectOne('http://192.168.0.31:5000/api/auth');
    // console.log(req);
  });
});
