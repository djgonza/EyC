import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCentrosComponent } from './buscador-centros.component';

describe('BuscadorCentrosComponent', () => {
  let component: BuscadorCentrosComponent;
  let fixture: ComponentFixture<BuscadorCentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorCentrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorCentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
