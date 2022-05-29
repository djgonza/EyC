import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEntidadesComponent } from './buscador-entidades.component';

describe('BuscadorEntidadesComponent', () => {
  let component: BuscadorEntidadesComponent;
  let fixture: ComponentFixture<BuscadorEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorEntidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
