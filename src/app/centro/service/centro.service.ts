import { Injectable, EventEmitter } from '@angular/core';
import { Centro } from '../model/Centro.model';
import { faker } from '@faker-js/faker';
import { FiltrosBuscadorCentros } from '../model/FiltrosBuscadorCentros.model';
import { Observable, of, Subject } from 'rxjs';
import { EntidadService } from 'src/app/entidad/service/entidad.service';
import { Entidad } from 'src/app/entidad/model/Entidad.model';

@Injectable({
  providedIn: 'root',
})
export class CentroService {
  centros: Centro[];
  entidadSeleccionada: EventEmitter<any> = new EventEmitter();

  constructor(private entidadService: EntidadService) {
    //this.centros = this.crearCentros(10);
    this.centros = this.createCentrosByEntidades(entidadService.entidades, 5);
    entidadService.entidadSeleccionada.subscribe((entidad) =>
      this.entidadSeleccionada.next(entidad)
    );
  }

  getCentros(
    filtros: FiltrosBuscadorCentros,
  ): Observable<Centro[]> {

    let entidadSeleccionada =
      this.entidadService.entidadSeleccionada.getValue();

    return of(
      this.centros
        .filter(
          (centro) =>
            entidadSeleccionada === null ||
            centro.Entidad === entidadSeleccionada?.Id
        )
        .filter(
          (centro) =>
            filtros.Denominacion === '' ||
            centro.Denominacion.includes(filtros.Denominacion)
        )
        .filter(
          (centro) => centro.Nima === '' || centro.Nima.includes(filtros.Nima)
        )
    );
  }

  private crearCentros(total: number): Centro[] {
    let centros: Centro[] = [];
    for (let i = 0; i < total; i++) {
      centros.push(
        new Centro(faker.company.companyName(), faker.random.numeric(5))
      );
    }
    return centros;
  }

  private createCentrosByEntidades(
    entidades: Entidad[],
    numeroCentrosPorEntidad: number
  ): Centro[] {
    let centros: Centro[] = [];

    entidades.forEach((entidad) => {
      for (let i = 0; i < numeroCentrosPorEntidad; i++) {
        centros.push(
          new Centro(
            faker.company.companyName(),
            faker.random.numeric(5),
            entidad.Id
          )
        );
      }
    });

    return centros;
  }
}
