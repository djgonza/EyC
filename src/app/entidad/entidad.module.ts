import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BuscadorEntidadesComponent } from './wrappers/buscador-entidades/buscador-entidades.component';
import { ListaEntidadesComponent } from './components/lista-entidades/lista-entidades.component';
import { FiltroBuscadorEntidadesComponent } from './components/filtro-buscador-entidades/filtro-buscador-entidades.component';

@NgModule({
  declarations: [
    BuscadorEntidadesComponent,
    ListaEntidadesComponent,
    FiltroBuscadorEntidadesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [BuscadorEntidadesComponent],
})
export class EntidadModule {}
