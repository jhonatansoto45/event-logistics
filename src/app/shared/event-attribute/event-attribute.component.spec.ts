import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAttributeComponent } from './event-attribute.component';

describe('EventAttributeComponent', () => {
  let component: EventAttributeComponent;
  let fixture: ComponentFixture<EventAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
