import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RegisterComponent } from '../../../../src/app/auth/pages/register/register.component';
import { GeneralService } from '../../../../src/app/services/general.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let compiled: HTMLElement;
  let service: GeneralService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [GeneralService],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    service = TestBed.inject(GeneralService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
