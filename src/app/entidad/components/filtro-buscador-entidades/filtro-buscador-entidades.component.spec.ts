import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroBuscadorEntidadesComponent } from './filtro-buscador-entidades.component';

describe('FiltroBuscadorEntidadesComponent', () => {
  let component: FiltroBuscadorEntidadesComponent;
  let fixture: ComponentFixture<FiltroBuscadorEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroBuscadorEntidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroBuscadorEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
