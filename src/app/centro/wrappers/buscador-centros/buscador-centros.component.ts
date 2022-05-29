import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Centro } from '../../model/Centro.model';
import { CentroService } from '../../service/centro.service';
import { ActivatedRoute } from '@angular/router';
import { FiltrosBuscadorCentrosComponent } from '../../components/filtros-buscador-centros/filtros-buscador-centros.component';
import { FiltrosBuscadorCentros } from '../../model/FiltrosBuscadorCentros.model';

@Component({
  selector: 'app-buscador-centros',
  templateUrl: './buscador-centros.component.html',
  styleUrls: ['./buscador-centros.component.sass'],
})
export class BuscadorCentrosComponent implements OnInit {
  centros: Centro[] = [];

  @ViewChild(FiltrosBuscadorCentrosComponent) filtrosBuscadorCentroComponent:
    | FiltrosBuscadorCentrosComponent
    | undefined;

  constructor(
    private centroService: CentroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.centroService.entidadSeleccionada.subscribe((entidad) => {
      this.buscarCentros();
    });
  }

  buscarCentros(): void {
    let filtros = this.filtrosBuscadorCentroComponent
      ? this.filtrosBuscadorCentroComponent.getFiltros()
      : new FiltrosBuscadorCentros('', '');
    this.centroService
      .getCentros(filtros)
      .subscribe((centros) => (this.centros = centros));
  }
}
