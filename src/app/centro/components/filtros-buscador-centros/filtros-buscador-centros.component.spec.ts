import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosBuscadorCentrosComponent } from './filtros-buscador-centros.component';

describe('FiltrosBuscadorCentrosComponent', () => {
  let component: FiltrosBuscadorCentrosComponent;
  let fixture: ComponentFixture<FiltrosBuscadorCentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosBuscadorCentrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosBuscadorCentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
