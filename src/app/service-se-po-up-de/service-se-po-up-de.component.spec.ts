import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSePoUpDeComponent } from './service-se-po-up-de.component';

describe('ServiceSePoUpDeComponent', () => {
  let component: ServiceSePoUpDeComponent;
  let fixture: ComponentFixture<ServiceSePoUpDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSePoUpDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSePoUpDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
