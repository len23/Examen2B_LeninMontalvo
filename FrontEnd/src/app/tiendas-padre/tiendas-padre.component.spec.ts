import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasPadreComponent } from './tiendas-padre.component';

describe('TiendasPadreComponent', () => {
  let component: TiendasPadreComponent;
  let fixture: ComponentFixture<TiendasPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendasPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendasPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
