import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Entidad } from '../../model/Entidad.model';

@Component({
  selector: 'app-lista-entidades',
  templateUrl: './lista-entidades.component.html',
  styleUrls: ['./lista-entidades.component.sass'],
})
export class ListaEntidadesComponent implements OnInit {
  @Input() entidades: Entidad[] = [];
  @Input() entidadSeleccionada: Entidad | null = null;

  @Output() seleccionarEntidad: EventEmitter<Entidad> = new EventEmitter<Entidad>();

  displayedColumns: string[] = ['Denominacion', 'Nif'];

  constructor() {}

  ngOnInit(): void {}

  entidadRowClick(entidad: Entidad): void {
    this.seleccionarEntidad.emit(entidad);
  }
}
