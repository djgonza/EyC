import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FiltrosBuscadorEntidad } from '../../model/FiltrosBuscadorEntidad.model';

@Component({
  selector: 'app-filtro-buscador-entidades',
  templateUrl: './filtro-buscador-entidades.component.html',
  styleUrls: ['./filtro-buscador-entidades.component.sass'],
})
export class FiltroBuscadorEntidadesComponent implements OnInit {
  @Output() buscarEntidadesEvent = new EventEmitter<FiltrosBuscadorEntidad>();

  buscadorEntidadesForm = new FormGroup({
    denominacion: new FormControl(''),
    nif: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  buscar(): void {
    this.buscarEntidadesEvent.emit(
      new FiltrosBuscadorEntidad(
        this.buscadorEntidadesForm.value.denominacion,
        this.buscadorEntidadesForm.value.nif
      )
    );
  }
}
