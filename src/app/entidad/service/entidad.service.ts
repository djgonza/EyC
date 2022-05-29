import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Entidad } from '../model/Entidad.model';
import { FiltrosBuscadorEntidad } from '../model/FiltrosBuscadorEntidad.model';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class EntidadService {
  entidadSeleccionada: BehaviorSubject<Entidad | null> = new BehaviorSubject<Entidad | null>(null);

  entidades: Entidad[];

  constructor() {
    this.entidades = this.crearEntidades(10);
  }

  getEntidadSeleccionada(): BehaviorSubject<Entidad | null> {
    return this.entidadSeleccionada;
  }

  setEntidadSeleccionada(entidad: Entidad): void {
    this.entidadSeleccionada.next(entidad);
  }

  getEntidades(filtros: FiltrosBuscadorEntidad): Observable<Entidad[]> {
    return of(
      this.entidades
        .filter(
          (entidad) =>
            filtros.Denominacion === '' ||
            entidad.Denominacion.includes(filtros.Denominacion)
        )
        .filter(
          (entidad) => filtros.Nif === '' || entidad.Nif.includes(filtros.Nif)
        )
    );
  }

  private crearEntidades(total: number): Entidad[] {
    let entidades: Entidad[] = [];
    for (let i = 0; i < total; i++) {
      entidades.push(
        new Entidad(faker.company.companyName(), faker.phone.phoneNumber())
      );
    }
    return entidades;
  }
}
