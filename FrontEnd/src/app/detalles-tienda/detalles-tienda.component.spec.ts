import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTiendaComponent } from './detalles-tienda.component';

describe('DetallesTiendaComponent', () => {
  let component: DetallesTiendaComponent;
  let fixture: ComponentFixture<DetallesTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
