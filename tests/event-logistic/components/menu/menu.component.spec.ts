import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from '../../../../src/app/event-logistic/components/menu/menu.component';
import { HomeService } from '../../../../src/app/event-logistic/services/home.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let compiled: HTMLElement;
  let service: HomeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule],
      providers: [HomeService],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    service = TestBed.inject(HomeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe crear el snapshot inicial', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('debe de abrir el popup de usuario', () => {
    component.openPopup();
    expect(component.visiblePopup).toBeTruthy();
  });

  test('debe de cerrar el popup de usuario', () => {
    component.disabledPopup();
    expect(component.visiblePopup).toBeFalsy();
  });

  test('debe enviar true para abrir la ventana de favoritos', () => {
    component.openFavorites();
    fixture.detectChanges();
    jest.spyOn(service.openFavorites$, 'next');

    expect(service.openFavorites$.next).toBeTruthy();
  });
});
