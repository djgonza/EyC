import { Component, Input, OnInit } from '@angular/core';
import { Centro } from '../../model/Centro.model';

@Component({
  selector: 'app-lista-centros',
  templateUrl: './lista-centros.component.html',
  styleUrls: ['./lista-centros.component.sass'],
})
export class ListaCentrosComponent implements OnInit {
  @Input() centros: Centro[] = [];
  displayedColumns: string[] = ['Denominacion', 'Nima'];

  constructor() {}

  ngOnInit(): void {}
}
