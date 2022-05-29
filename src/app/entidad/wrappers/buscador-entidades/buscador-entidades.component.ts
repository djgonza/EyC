import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Entidad } from '../../model/Entidad.model';
import { FiltrosBuscadorEntidad } from '../../model/FiltrosBuscadorEntidad.model';
import { EntidadService } from '../../service/entidad.service';

@Component({
  selector: 'app-buscador-entidades',
  templateUrl: './buscador-entidades.component.html',
  styleUrls: ['./buscador-entidades.component.sass'],
})
export class BuscadorEntidadesComponent implements OnInit {
  entidades: Entidad[] = [];
  entidadSeleccionada: Entidad | null = null;

  constructor(private entidadesService: EntidadService) {
  }

  ngOnInit(): void {
    this.entidadesService
      .getEntidadSeleccionada()
      .subscribe(
        (entidadSeleccionada) =>
          (this.entidadSeleccionada = entidadSeleccionada)
      );
  }

  buscarEntidades(filtros: FiltrosBuscadorEntidad): void {
    this.entidadesService
      .getEntidades(filtros)
      .subscribe((entidades) => (this.entidades = entidades));
  }

  seleccionarEntidad(entidad: Entidad): void {
    this.entidadesService.setEntidadSeleccionada(entidad);
  }
}
