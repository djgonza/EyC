import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FiltrosBuscadorCentros } from '../../model/FiltrosBuscadorCentros.model';

@Component({
  selector: 'app-filtros-buscador-centros',
  templateUrl: './filtros-buscador-centros.component.html',
  styleUrls: ['./filtros-buscador-centros.component.sass'],
})
export class FiltrosBuscadorCentrosComponent implements OnInit {
  
  @Output() buscarCentrosEvent = new EventEmitter<any>();

  buscadorCentrosForm = new FormGroup({
    denominacion: new FormControl(''),
    nima: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  buscar(): void {
    this.buscarCentrosEvent.emit();
  }

  getFiltros(): FiltrosBuscadorCentros {
    return new FiltrosBuscadorCentros(
      this.buscadorCentrosForm.value.denominacion,
      this.buscadorCentrosForm.value.nima
    );
  }
}
