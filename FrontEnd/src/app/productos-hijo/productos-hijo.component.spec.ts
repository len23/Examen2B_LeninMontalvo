import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosHijoComponent } from './productos-hijo.component';

describe('ProductosHijoComponent', () => {
  let component: ProductosHijoComponent;
  let fixture: ComponentFixture<ProductosHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
