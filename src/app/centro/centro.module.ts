import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltrosBuscadorCentrosComponent } from './components/filtros-buscador-centros/filtros-buscador-centros.component';
import { BuscadorCentrosComponent } from './wrappers/buscador-centros/buscador-centros.component';
import { ListaCentrosComponent } from './components/lista-centros/lista-centros.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FiltrosBuscadorCentrosComponent,
    BuscadorCentrosComponent,
    ListaCentrosComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
  exports: [BuscadorCentrosComponent],
  providers: []
})
export class CentroModule {}
